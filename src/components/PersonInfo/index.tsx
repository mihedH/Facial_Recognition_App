import { Center, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

type PersonInfoProps = {
    infos: {
        name: string;
        id: string;
        birthday: string;
        address: string
    }
}

/**
 * PersonInfo component displays personal information in a styled layout.
 * 
 * @param {PersonInfoProps} props - The properties object containing a person's information.
 * @returns {JSX.Element} The layout displaying the person's info.
 */

export const PersonInfo: FC<PersonInfoProps> = ({ infos }) => {
    return (
        <Center flexDirection={{ base: "column", md: "row" }} borderRadius="30px" border="3px dashed #6B43FF" w={{ base: "20rem", md: "60rem" }} padding="2rem" justifyContent="space-evenly">
            <Flex direction="column" gap="2rem">
                <Text fontWeight="bold" fontSize="xl">full name</Text>
                <Text >{infos.name}</Text>
            </Flex>
            <Flex direction="column" gap="2rem">
                <Text fontWeight="bold" fontSize="xl">Id Number</Text>
                <Text>{infos.id}</Text>
            </Flex>
            <Flex direction="column" gap="2rem">
                <Text fontWeight="bold" fontSize="xl">Birthday</Text>
                <Text>{infos.birthday}</Text>
            </Flex>
            <Flex direction="column" gap="2rem">
                <Text fontWeight="bold" fontSize="xl">Address</Text>
                <Text>{infos.address}</Text>
            </Flex>
        </Center>
    )
};