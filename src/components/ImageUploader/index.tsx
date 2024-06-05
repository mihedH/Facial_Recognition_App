import { Center, Image, Input, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { CustomButton } from "../CustomButton";
import { useImageContext } from "../../ImageProvider";

export type ImageType = {
    name: string;
    url: string;
};

/**
 * ImageUploader component allows users to upload an image by either
 * dragging and dropping or browsing files.
 * 
 * @returns {JSX.Element} The image uploader interface.
 */

export const ImageUploader = () => {
    const [isDragging, setIsDragging] = useState(false);
    const { image, setImage } = useImageContext();
    const fileInputRef = useRef<HTMLInputElement>(null);
    // api response that contain the CIN image
    const cinImage = './images/cinImage.png'

    const selectFile = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    //function to handle the file selection by browsing
    const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage({
                name: file.name,
                url: URL.createObjectURL(file),
            });
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files?.[0];
        if (file) {
            setImage({
                name: file.name,
                url: URL.createObjectURL(file),
            });
        }
    };
    if (image) {
        return (
            <Center flexDirection={{ base: "column", lg: "row" }} borderRadius="25" gap="1rem">
                <Image src={image.url} w="370px" h="240px" objectFit="cover" borderRadius="15" />
                <Image src={cinImage} w="370px" h="240px" objectFit="cover" borderRadius="15" />
            </Center>
        )
    }
    return (
        <Center flexDirection="column" bgColor="blueBrand.400" w={{ base: "20rem", md: "30rem", lg: "48rem" }} h="18rem" borderRadius="25" gap="1rem" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            <Image src="./images/uploadIcon.svg" />
            {!!isDragging && <Text>Drop image here</Text>}
            {!isDragging && <> <Text fontWeight="xs" fontSize="18">Drag and drop your image</Text>
                <Text>Or</Text>
                <CustomButton _hover={{ bg: "blueBrand.300" }} bg="blueBrand.100" onClick={selectFile}>Browse</CustomButton></>}
            <Input name="file" type="file" display="none" ref={fileInputRef} onChange={onFileSelect} accept="image/*"></Input>
        </Center>
    )
};