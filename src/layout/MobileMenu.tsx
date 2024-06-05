import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, Image, Input, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { MainMenu } from "./MainMenu";
import React from "react";

//Menu for the Mobile version
export const MobileMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <IconButton
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label="Menu"
                onClick={isOpen ? onClose : onOpen}
                bg="blueBrand.700"
                _hover={{ bg: "blueBrand.600" }}
                color="white"
            />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Stack direction="row" alignItems="center" gap="1rem">
                            <Image src="./images/recognizeLogo.svg" alt="Recognizer logo" w={{ base: "2rem", md: "3rem" }} />
                            <Text fontWeight="600" color="blueBrand.900" fontSize={{ base: "1rem", md: "2rem" }}>Recognizer</Text>
                        </Stack>
                    </DrawerHeader>

                    <DrawerBody>
                        <Box position="absolute" top="4rem" right="0rem" left="0rem" bg="blueBrand.700" borderRadius="sm" boxShadow="md">
                            <MainMenu direction="column" />
                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button colorScheme='blueBrand.900' variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
