import LoginForm from "../components/LoginForm.tsx";
import {createFileRoute} from "@tanstack/react-router";
import BaseLayout from "../components/BaseLayout.tsx";

const LoginComponent = () => {
    return (
        <>
            <BaseLayout>
                <h1>Welcome Back</h1>
                <LoginForm/>
            </BaseLayout>
        </>
    );
};

export const Route = createFileRoute("/login")({
    component: LoginComponent,
});