import { Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";

const Header: FC = () => {
    return (
        <Flex py={4} mb={16} justify={"center"}>
            <Heading fontWeight={"thin"}>Pomodoro</Heading>
        </Flex>
    );
};

export default Header;
