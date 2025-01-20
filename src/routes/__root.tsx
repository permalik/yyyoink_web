import {createRootRoute, Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import {Theme} from "@radix-ui/themes";
import {BaseLink} from "../components/BaseLink.tsx";

export const Route = createRootRoute({
    component: () => (
        <>
            <Theme accentColor="ruby" grayColor="sand">
                <BaseLink to={"/"}>yyyoink</BaseLink>
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