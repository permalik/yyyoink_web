import * as React from "react";
import {Link as RadixLink} from "@radix-ui/themes";
import {Link} from "@tanstack/react-router";
import {createLink, LinkComponent} from "@tanstack/react-router";

interface BaseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string,
    children: string,
};

const BaseLinkComponent = React.forwardRef<HTMLAnchorElement, BaseLinkProps>(
    (props, ref) => {
        return (
            <RadixLink asChild>
                <Link ref={ref} {...props}>
                    {props.children}
                </Link>
            </RadixLink>
        );
    });

const CreatedLinkComponent = createLink(BaseLinkComponent);

export const BaseLink: LinkComponent<typeof BaseLinkComponent> = (props) => {
    return <CreatedLinkComponent preload={"intent"} {...props} />;
};