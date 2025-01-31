import useThemeStore from "../stores/themeStore.tsx";
import {Flex, Switch} from "@radix-ui/themes";
import {BaseLink} from "./BaseLink.tsx";

export default function BaseHeader() {
    const toggle = useThemeStore((state) => state.toggle);
    return (
        <Flex direction={"row"} align={"center"} justify={"between"}>
            <BaseLink to={"/"} style={{fontWeight: 800}}>yyyoink</BaseLink>
            <Flex direction={"row"} align={"center"} justify={"center"} gap={"3"}>
                <BaseLink to={"/"}>generate</BaseLink>
                <BaseLink to={"/"}>profile</BaseLink>
                <Switch onCheckedChange={() => toggle()}/>
            </Flex>
        </Flex>
    );
};