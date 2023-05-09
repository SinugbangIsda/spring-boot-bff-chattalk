import { Flex } from "@chakra-ui/react";

const ChatListItem = ({ avatar, children }: any) => {
    return (
        <Flex
            align = "center"
            px = "4"
            py = "3"
            cursor = "pointer"
            role = "group"
            fontWeight = "semibold"
            transition = ".15s ease"
            color = "black"
            _hover = {{
                bg: "#e2ecff"
            }}
        >
            { avatar }
            { children }
        </Flex>
    )
};

export default ChatListItem;