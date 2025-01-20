import {createRootRoute, Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import {Theme} from "@radix-ui/themes";
import BaseHeader from "../components/BaseHeader.tsx";
import useThemeStore from "../stores/themeStore.tsx";

const RouteComponent = () => {
    const {theme} = useThemeStore();
    return (
        <>
            <Theme appearance={theme} accentColor={"ruby"} grayColor={"sand"}>
                <BaseHeader/>
                <Outlet/>
                <TanStackRouterDevtools/>
            </Theme>
        </>
    );
};

export const Route = createRootRoute({
    component: RouteComponent,
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