import { ChakraProvider } from "@chakra-ui/react";
import { FC } from "react";
import theme from "./theme";
import { ImageProvider } from "./ImageProvider";

//Provider component to ensures that all child components have access to Chakra UI's theme and  design system.
export const Provider: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <ChakraProvider theme={theme}>
            <ImageProvider>
            {children}
            </ImageProvider>
        </ChakraProvider>
    )
};