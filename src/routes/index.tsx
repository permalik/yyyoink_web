import {createFileRoute} from "@tanstack/react-router";
import BaseLayout from "../components/BaseLayout.tsx";
import LoginForm from "../components/LoginForm.tsx";

const IndexComponent = () => {
    return (
        <BaseLayout>
            <LoginForm/>
        </BaseLayout>
    );
};

export const Route = createFileRoute("/")({
    component: IndexComponent,
});