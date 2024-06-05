import { Center, Image, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { ImageUploader } from "../ImageUploader";

/**
 * ImageUploadeContainer component renders a tab interface for uploading images
 * either by file upload or via camera.
 * 
 * @returns {JSX.Element} The tab container for image upload options.
 */

export const ImageUploadeContainer = () => {
    return (
        <Tabs position='relative' variant='unstyled' w={{ base: "25rem", md: "50rem", lg: "60rem" }} h={{ base: "40rem", md: "29rem" }} bg="blueBrand.800" borderRadius="30px" border="3px dashed #6B43FF" >
            <TabList bg="blueBrand.900" borderTopRadius="30px">
                <Tab
                    _selected={{ color: "blueBrand.300" }}
                    _focus={{ boxShadow: "none" }}
                    color="white">
                    <Center flexDirection="column" gap="2px">
                        <Image src="./images/file-plus.svg" w="2rem" h="2rem" />
                        <Text color="blueBrand.300" fontSize="12">Upload file</Text>
                    </Center>
                </Tab>
                <Tab color="white">
                    <Center flexDirection="column" gap="2px">
                        <Image src="./images/cameraIcon.svg" w="2rem" h="2rem" />
                        <Text fontSize="12">Camera</Text>
                    </Center>
                </Tab>
            </TabList>
            <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
            <TabPanels display="flex" justifyContent="center" alignItems="center" h="25rem">
                <TabPanel maxH="20rem">
                    <ImageUploader />
                </TabPanel>
                <TabPanel>
                    <Text color="white" fontSize="25" fontWeight="bold">Camera is not unavailable !!</Text>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
};