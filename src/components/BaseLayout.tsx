import React from "react";
import BaseHeader from "./BaseHeader.tsx";
import {Flex} from "@radix-ui/themes";

const BaseLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <Flex minHeight={"100vh"} direction={"column"} style={{padding: "0.5rem clamp(0.25rem, 10vw, 10rem)"}}>
                <BaseHeader/>
                <main
                    style={{
                        display: "flex",
                        flexGrow: 1,
                        flexFlow: "column nowrap",
                        alignItems: "start",
                        justifyContent: "center",
                    }}
                >
                    {children}
                </main>
            </Flex>
        </>
    );
};

export default BaseLayout;