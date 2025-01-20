import {createRootRoute, Link, Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import {Theme, Link as RadixLink} from "@radix-ui/themes";

export const Route = createRootRoute({
    component: () => (
        <>
            <Theme accentColor="ruby" grayColor="sand">
                <RadixLink asChild style={{fontWeight: 800}}>
                    <Link to="/">yyyoink</Link>
                </RadixLink>
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