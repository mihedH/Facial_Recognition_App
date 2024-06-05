import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";

//CustomButton renders a Chakra UI Button with custom styling.
export const CustomButton: FC<ButtonProps> = ({ ...rest }) => {
    return (
        <Button
            borderRadius="2rem"
            w="8rem"
            color="white"
            fontSize=""
            {...rest} />
    )
};