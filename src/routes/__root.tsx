import {createRootRoute, Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import {Theme} from "@radix-ui/themes";
import useThemeStore from "../stores/themeStore.tsx";

const RouteComponent = () => {
    const {theme} = useThemeStore();
    return (
        <>
            <Theme appearance={theme} accentColor={"ruby"} grayColor={"sand"}>
                <Outlet/>
                <TanStackRouterDevtools/>
            </Theme>
        </>
    );
};

export const Route = createRootRoute({
    component: RouteComponent,
});