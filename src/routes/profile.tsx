import {createFileRoute} from "@tanstack/react-router";
import * as RadixForm from "@radix-ui/react-form";
import BaseLayout from "../components/BaseLayout.tsx";
import {combineClasses} from "../utils/styles.ts";
import {Button} from "@radix-ui/themes";
import React, {useEffect, useState} from "react";
import useThemeStore from "../stores/themeStore.tsx";

export const Route = createFileRoute("/profile")({
    component: RouteComponent,
});

function RouteComponent() {
    // TODO: jwt or encrypted uuid for site access during session
    const uuid = "4f37a936-ba47-4cc1-8f42-3f0482fee8bc";
    const API_GET = `http://localhost:5046/users/${uuid}`;
    const API_PATCH = `http://localhost:5046/users/update/${uuid}`;
    const [email, setEmail] = useState("-");
    const [password, setPassword] = useState("-");

    useEffect(() => {
        async function userInfo() {
            try {
                const response = await fetch(API_GET, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "GET",
                });

                const result = await response.json();

                if (response.ok) {
                    console.log(`fetched account for ${result.email}`);
                    setEmail(result.email);
                    setPassword(result.password);
                }
            } catch (err) {
                console.error("failed to fetch account: ", err);
            }
        }

        userInfo().then(() => console.log("set userInfo"));
    });

    const {theme} = useThemeStore();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const method = (data._method as string) || "POST";
        delete data._method;

        try {
            const response = await fetch(API_PATCH, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: method,
                body: JSON.stringify(data),
            });

            // const result = await response.json();

            // TODO: toast
            if (response.ok) {
                console.log("updated account");
                // console.log(`logged in ${result.email}`);
            }

        } catch (err) {
            console.error("failed to login: ", err);
        }
    }

    return (
        <>
            <BaseLayout>
                <h1>Welcome Back</h1>
                <RadixForm.Root className="FormRoot" method={"POST"} onSubmit={handleSubmit}>
                    <input type={"hidden"} name={"_method"} value={"PATCH"} />
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
                            <input required
                                   type="email"
                                   placeholder={email}
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
                            <RadixForm.Label
                                className={combineClasses("FormLabel", theme === "light" ? "FormLabelLight" : "FormLabelDark")}>
                                Password
                            </RadixForm.Label>
                            <RadixForm.Message match="valueMissing" className="FormMessage">Please input a
                                password</RadixForm.Message>
                            <RadixForm.Message match={(value) => value.length < 10} className="FormMessage">
                                Password must be at least 6 characters
                            </RadixForm.Message>
                        </div>
                        <RadixForm.Control asChild>
                            <input required
                                   placeholder={password}
                                   type="text"
                                   className={combineClasses("Input", theme === "light" ? "InputLight" : "InputDark")}/>
                        </RadixForm.Control>
                    </RadixForm.Field>
                    <RadixForm.Submit asChild>
                        <Button>
                            Update
                        </Button>
                    </RadixForm.Submit>
                </RadixForm.Root>
            </BaseLayout>
        </>
    );
}
