import {createFileRoute} from "@tanstack/react-router";
import BaseHeader from "../components/BaseHeader.tsx";

function IndexComponent() {
    return (
        <>
            <BaseHeader/>
            <main>
                index
            </main>
        </>
    );
}

export const Route = createFileRoute("/")({
    component: IndexComponent,
});
