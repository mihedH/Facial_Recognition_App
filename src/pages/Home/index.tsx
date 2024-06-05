import { Center, Flex, Image, Text } from "@chakra-ui/react";
import { CustomButton } from "../../components/CustomButton";
import { SizeSpecifier } from "../../components/SizeSpecifier";
import { ImageUploadeContainer } from "../../components/ImageUploadeContainer";
import { TopBar } from "../../layout/TopBar";
import { PersonInfo } from "../../components/PersonInfo";
import { useImageContext } from "../../ImageProvider";
import { useState } from "react";
import { RecognitionAnimation } from "../../components/RecognitionAnimation";

//Home page where the recognition system will be used
const Home = () => {
  const { image } = useImageContext();
  const [showDetails, setShowDetails] = useState(false);
  const [isRecognizing, setIsRecognizing] = useState(false);

  const handleCompareClick = () => {
    if (image) {
      setIsRecognizing(true); // Start recognition animation
      setShowDetails(false);

      setTimeout(() => {
        setIsRecognizing(false); // Stop recognition animation
        setShowDetails(true);
      }, 3000);
    } else {
      setIsRecognizing(false);
    }
  };
  return (
    <div>
      <TopBar />
      <Center flexDirection="column" gap="4rem">
        <Center flexDirection="column" marginTop="3rem">
          <Text fontWeight="900" fontSize={{ base: "2rem", md: "3rem" }} textAlign="center">Facial Recognition System</Text>
          <SizeSpecifier size="25" fontSize={{ base: "16", md: "24" }} fontWeight="100" />
        </Center>
        <ImageUploadeContainer />
        <CustomButton bg="orangeBrand.100" _hover={{ bg: "orangeBrand.200" }} onClick={handleCompareClick}>Compare</CustomButton>

        {isRecognizing && <RecognitionAnimation duration={8000} onComplete={() => setShowDetails(true)} />}

        {!!image && showDetails && <>
          <PersonInfo infos={{ name: "Mihed Hassine", id: "123456789", birthday: "14/05/2001", address: "Tokyo" }} />
          <Flex justifyContent="space-evenly" alignItems={{ base: "flex-start", md: "center" }} w={{ base: "20rem", md: "60rem" }} direction={{ base: "column", md: "row" }} gap={{ base: "2rem" }}>
            <Center gap="1rem">
              <Image src="./images/recognitionPercent.svg" />
              <Text color="blueBrand.600">100% recognized</Text>
            </Center>
            <Center gap="1rem">
              <Image src="./images/timeIcon.svg" />
              <Text color="blueBrand.600">Time: 8 seconds</Text>
            </Center>
            <Center gap="1rem">
              <Image src="./images/downloadIcon.svg" />
              <Text color="blueBrand.600">download as <Text color="blueBrand.600" display="inline" decoration="underline">PDF</Text> <Text color="blueBrand.600" display="inline" decoration="underline"> JPEG</Text></Text>
            </Center>
          </Flex>
        </>}
      </Center>
    </div>
  );
};
export default Home;