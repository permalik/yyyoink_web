import {createFileRoute} from "@tanstack/react-router";
import BaseLayout from "../components/BaseLayout.tsx";

const IndexComponent = () => {

    return (
        <>
            <BaseLayout>
                index
            </BaseLayout>
        </>
    );
};

export const Route = createFileRoute("/")({
    component: IndexComponent,
});