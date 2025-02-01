import {createRootRoute, Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import {Theme} from "@radix-ui/themes";
import useThemeStore from "../stores/themeStore.tsx";
import {ToastContainer} from "react-toastify";

export const Route = createRootRoute({
    component: RouteComponent,
});

function RouteComponent() {
    const {theme} = useThemeStore();
    return (
        <>
            <Theme appearance={theme} accentColor={"ruby"} grayColor={"sand"}>
                <Outlet/>
                <TanStackRouterDevtools/>
                <ToastContainer/>
            </Theme>
        </>
    );
};