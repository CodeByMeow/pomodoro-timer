import { Container } from "@chakra-ui/react";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const DefaultLayout: FC = () => {
    return (
        <Container maxW={"container.sm"} py={12} minH={"100vh"}>
            <Header />
            <Outlet />
        </Container>
    );
};

export default DefaultLayout;

