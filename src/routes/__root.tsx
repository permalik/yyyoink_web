import {createRootRoute, Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import {Flex, Theme} from "@radix-ui/themes";
import {BaseLink} from "../components/BaseLink.tsx";

export const Route = createRootRoute({
    component: () => (
        <>
            <Theme accentColor={"ruby"} grayColor={"sand"}>
                <Flex direction={"row"}>
                    <BaseLink to={"/"} style={{fontWeight: 800}}>yyyoink</BaseLink>
                </Flex>
                <Outlet/>
                <TanStackRouterDevtools/>
            </Theme>
        </>
    ),
});

/*
        <Flex direction="row" align="center" justify="between">
            <CustomLink to="/" style={{fontWeight: 800}}>yyyoink</CustomLink>
            <Flex direction="row" align="center" justify="center" gap="3">
                <CustomLink to="/generate">generate</CustomLink>
                <CustomLink to="/account">account</CustomLink>
                <Switch onCheckedChange={() => toggle()}></Switch>
            </Flex>
        </Flex>
*/