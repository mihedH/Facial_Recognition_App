import { Center, Image, Stack, Text, BoxProps, Box } from "@chakra-ui/react";
import { MainMenu } from "./MainMenu";
import { FC } from "react";
import { MobileMenu } from "./MobileMenu";

//display the top bar of the application with the logo and the main menu
export const TopBar: FC<BoxProps> = () => {
    return (
        <Stack maxH="5em" direction="row" position="fixed" width="90%" justifyContent={{base:"flex-end",md:"space-between"}} margin={{base:"0",md:"0 3rem"}}>
            <Center gap="1rem" flexDirection="row" display={{ base: "none", md: "flex" }}>
                <Image src="./images/recognizeLogo.svg" alt="Recognizer logo" w={{base:"2rem",md:"3rem"}} />
                <Text fontWeight="600" fontSize={{base:"1rem",md:"2rem"}}>Recognizer</Text>
            </Center>
            <Box display={{ base: "block", md: "none" }}>
                <MobileMenu />
            </Box>
            <Box display={{ base: "none", md: "block" }}>
                <MainMenu />
            </Box>
        </Stack>
    )
};