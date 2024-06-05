import React, { FC } from 'react';

import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react';
import {
    FallbackProps,
    ErrorBoundary as ReactErrorBoundary,
} from 'react-error-boundary';

/**
 * ErrorFallback component displays a fallback UI when a JavaScript error is thrown.
 * @param {FallbackProps} error - The error object.
 * @returns {JSX.Element} The fallback UI.
 */
const ErrorFallback = ({ error }: FallbackProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box p="4" m="auto">
            <Alert status="error" borderRadius="md">
                <AlertIcon />
                <Box flex="1">
                    <AlertTitle>Title</AlertTitle>
                    <AlertDescription display="block" lineHeight="1.4">
                        <Button
                            variant="link"
                            size="sm"
                            textDecoration="underline"
                            onClick={onOpen}
                            color="red.800"
                            _dark={{ color: 'red.100' }}
                        >
                            Expand
                        </Button>
                        <Box fontFamily="monospace">{error.message}</Box>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Title</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box fontFamily="monospace">{error.message}</Box>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </AlertDescription>
                </Box>
            </Alert>
        </Box>
    );
};

/**
 * ErrorBoundary component catches JavaScript errors and displays the ErrorFallback component.
 * @param {React.PropsWithChildren<unknown>} props - The props including children components.
 * @returns {JSX.Element} The error boundary wrapper.
 */
export const ErrorBoundary: FC<React.PropsWithChildren<unknown>> = (props) => {
    return <ReactErrorBoundary FallbackComponent={ErrorFallback} {...props} />;
};
