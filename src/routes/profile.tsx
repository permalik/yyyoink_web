import {createFileRoute} from "@tanstack/react-router";
import BaseLayout from "../components/BaseLayout.tsx";

export const Route = createFileRoute("/profile")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <BaseLayout>
                profile
            </BaseLayout>
        </>
    );
}
