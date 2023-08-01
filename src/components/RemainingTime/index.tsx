import { Box, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

interface RemainingTimeProps {
    time: number;
}

const RemainingTime: FC<RemainingTimeProps> = ({ time }) => {
    return (
        <Box textAlign={"center"} py={2}>
            <Heading as={"h4"} fontSize={"6xl"} fontWeight={"thin"}>
                {time}
            </Heading>
            <Text fontSize={"2xl"} letterSpacing={"-0.5%"}>
                minutes
            </Text>
        </Box>
    );
};

export default RemainingTime;
