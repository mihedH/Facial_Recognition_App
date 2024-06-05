import { Text, TextProps } from "@chakra-ui/react";
import { FC } from "react";

type SizeSpecifierProps = TextProps & {
    size: string;
};
//take the size of the image and display the maximum size after processing
export const SizeSpecifier: FC<SizeSpecifierProps> = ({ size, ...rest }) => {
    return (
        <Text {...rest}>Max image size after processing:{size} megapixels</Text>
    )
};