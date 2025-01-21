import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import {RouterProvider, createRouter} from "@tanstack/react-router";
import {routeTree} from "./routeTree.gen.ts";
import "./styles/Base.css";

const router = createRouter({routeTree});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router
    }
}

const rootElement = document.getElementById("root");
if (!rootElement?.innerHTML) {
    const root = ReactDOM.createRoot(rootElement!);
    root.render(
        <StrictMode>
            <RouterProvider router={router}/>
        </StrictMode>,
    );
}