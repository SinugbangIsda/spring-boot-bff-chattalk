import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

const NewChatModal = ({ isOpen, onClose }: any) => {
    return (
        <Modal
            isOpen = { isOpen }
            onClose = { onClose }
            size = "xl"
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    New Conversation
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input
                        placeholder = "Search for a user"
                        size = "md"
                        mb = { 2 }
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme = "blue"
                        onClick = { onClose }
                        mr = { 3 }
                    >   
                        Create
                    </Button>
                    <Button
                        onClick = { onClose }
                    >
                        Cancel
                    </Button>
                    
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
};

export default NewChatModal;