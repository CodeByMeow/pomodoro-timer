import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const styles = {
    global: {
        body: {
            bg: "pomodoro.s1",
            color: "whiteAlpha.700",
            bgGradient: "linear(to-br, pomodoro.s3, pomodoro.s2)",
        },
    },
};

const colors = {
    pomodoro: {
        s1: "#2A2D46",
        s2: "#2A2B4D",
        s3: "#464B6C",
        s4: "#4c4457",
        s5: "#7E62F6",
        s6: "#F1A864",
        s7: "#3420da",
    },
};

const shadows = {
    base: "8px 8px 45px #232636, -8px -8px 45px #6971a2",
};

const Button = defineStyleConfig({
    variants: {
        control: {
            boxShadow: "4px 4px 12px  #232636, -4px -4px 12px #6971a2",
            bg: "pomodoro.s3",
            color: "whiteAlpha.600",
            p: 2,
            _hover: {
                color: "white",
            },
            rounded: "xl",
        },
    },
});

const components = {
    Button,
};

const theme = extendTheme({ config, styles, colors, shadows, components });

export default theme;
