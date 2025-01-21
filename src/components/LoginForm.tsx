import React from "react";
import {Button} from "@radix-ui/themes";
import * as RadixForm from "@radix-ui/react-form";
import {combineClasses} from "../utils/styles.ts";
import useThemeStore from "../stores/themeStore.tsx";
import "../styles/LoginForm.css";

const LoginForm = () => {
    const {theme} = useThemeStore();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const $form = event.currentTarget;
        const formData = new FormData($form);

        const email = formData.get("email");
        const password = formData.get("password");

        console.log("email: ", email);
        console.log("password: ", password);

        /*
        submit(formData, {
            method: ($form.getAttribute("method") ?? $form.method) as HTMLFormMethod,
            action: $form.getAttribute("action") ?? $form.action,
        });
        */
    }

    return (
        <>
            <RadixForm.Root className="FormRoot" method="POST" action="/profile" onSubmit={handleSubmit}>
                <RadixForm.Field name="email" className="FormField">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent: "space-between",
                        }}
                    >
                        <RadixForm.Label
                            className={combineClasses("FormLabel", theme === "light" ? "FormLabelLight" : "FormLabelDark")}>
                            Email
                        </RadixForm.Label>
                        <RadixForm.Message match="valueMissing"
                                           className={combineClasses("FormMessage", theme === "light" ? "FormMessageLight" : "FormMessageDark")}>
                            Please input your email
                        </RadixForm.Message>
                        <RadixForm.Message match="typeMismatch"
                                           className={combineClasses("FormMessage", theme === "light" ? "FormMessageLight" : "FormMessageDark")}>
                            Please provide a valid email
                        </RadixForm.Message>
                    </div>
                    <RadixForm.Control asChild>
                        <input type="email" required
                               className={combineClasses("Input", theme === "light" ? "InputLight" : "InputDark")}/>
                    </RadixForm.Control>
                </RadixForm.Field>
                <RadixForm.Field name="password" className="FormField">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent: "space-between",
                        }}
                    >
                        <RadixForm.Label className="FormLabel">Password</RadixForm.Label>
                        <RadixForm.Message match="valueMissing" className="FormMessage">Please input a
                            password</RadixForm.Message>
                        <RadixForm.Message match={(value) => value.length < 10} className="FormMessage">
                            Password must be at least 6 characters
                        </RadixForm.Message>
                    </div>
                    <RadixForm.Control asChild>
                        <input type="password" required
                               className={combineClasses("Input", theme === "light" ? "InputLight" : "InputDark")}/>
                    </RadixForm.Control>
                </RadixForm.Field>
                <RadixForm.Submit asChild>
                    <Button>
                        Submit
                    </Button>
                </RadixForm.Submit>
            </RadixForm.Root>
        </>
    );
};

/*
*/

export default LoginForm;