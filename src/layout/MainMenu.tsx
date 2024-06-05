import { Box, BoxProps, Stack } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";

//display the main menu of the application
export const MainMenu = ({ ...rest }) => {
    return (
        <Stack direction="row" spacing="0.5"   {...rest}>
            <MainMenuItem to="/">Documentation</MainMenuItem>
            <MainMenuItem to="/">How it works</MainMenuItem>
        </Stack>
    )
};
// display a menu item
const MainMenuItem = ({ to, icon, children, ...rest }: BoxProps & { to: string, icon?: FC<PropsWithChildren<unknown>> }) => {
    const { pathname } = useLocation();
    const isActive = to === pathname;
    return (
        <Box
            as={Link}
            to={to}
            justifyContent="flex-start"
            position="relative"
            opacity={isActive ? 1 : 0.8}
            fontWeight="600"
            bg='transparent'
            fontSize={{ base: 'lg', md: 'md' }}
            color={isActive ? 'whiteBrand.50' : 'gray.600'}
            px="4"
            py="2"
            _hover={{
                shadow: "sm",
                _after: {
                    opacity: 0.5,
                    w: '4rem',
                },
            }}
            _focusVisible={{
                outline: 'none',
                bg: 'gray.900',
                _after: {
                    opacity: 1,
                    w: '2rem',
                },
            }}
            _after={{
                opacity: isActive ? 0.5 : 0,
                content: '""',
                position: 'absolute',
                insetStart:'8%',
                bottom: '0.2em',
                transform: 'translateX(5%)',
                transition: '0.2s',
                w: 0,
                h: '2px',
                borderRadius: 'full',
                bg: 'currentColor',
            }}
            {...rest}
        >

            {children}

        </Box>
    );
};
