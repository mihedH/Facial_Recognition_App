import { Box, Center, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { MutatingDots } from "react-loader-spinner";

interface RecognitionAnimationProps {
  duration: number;
  onComplete: () => void;
}
// RecognitionAnimation component to display a loading animation during recognition process
export const RecognitionAnimation: FC<RecognitionAnimationProps> = ({ duration, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, duration);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <Center position="fixed" top="50%" left="50%" style={{ transform: "translate(-50%, -50%)" }}>
      <Box position="relative">
        <Box
          width="300px"
          height="300px"
          borderRadius="50%"
          backgroundColor="rgba(0, 0, 0, 0.8)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <MutatingDots
            visible={true}
            height={100} // Increase size here
            width={100} // Increase size here
            color="#F57025" // Change color here
            secondaryColor="#F57025" // Change color here
            radius={12.5}
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""


          />
        </Box>
        <Text zIndex="1000"
          color="white" // Text color
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          position="absolute"
          mt="4rem"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)">
          Recognizing...
        </Text>
      </Box>
    </Center>
  );
};
