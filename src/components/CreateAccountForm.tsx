import React from "react";
import {Button} from "@radix-ui/themes";
import * as RadixForm from "@radix-ui/react-form";
import {combineClasses} from "../utils/styles.ts";
import useThemeStore from "../stores/themeStore.tsx";
import "../styles/LoginForm.css";
import {useNavigate} from "@tanstack/react-router";

export default function CreateAccountForm() {
    const {theme} = useThemeStore();
    const navigate = useNavigate({ from: "/createAccount" });

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("http://localhost:5046/users", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: form.method,
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (response.ok) {
                console.log(`created account for ${result.email}`);
                await navigate({ to: "/profile" });
            }
        } catch (e) {
            console.error("failed to create account: ", e);
        }
    }

    return (
        <>
            <RadixForm.Root className="FormRoot" method="POST" onSubmit={handleSubmit}>
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