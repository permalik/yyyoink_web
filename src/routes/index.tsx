import {createFileRoute} from "@tanstack/react-router";
import BaseLayout from "../components/BaseLayout.tsx";
import {Flex} from "@radix-ui/themes";
import {BaseLink} from "../components/BaseLink.tsx";

const IndexComponent = () => {
    return (
        <BaseLayout>
            <h1>
                <span style={{display: "table"}}>Create Parse Trees, Grammar,</span>
                <span style={{display: "table"}}>and Logical Instructions</span>
            </h1>
            <Flex direction="row" gap="3">
                <BaseLink to={"/"}>Generate</BaseLink>
                <BaseLink to={"/login"}>Login</BaseLink>
            </Flex>
        </BaseLayout>
    );
};

export const Route = createFileRoute("/")({
    component: IndexComponent,
});