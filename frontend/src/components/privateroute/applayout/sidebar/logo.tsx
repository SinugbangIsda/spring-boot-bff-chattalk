import { Flex, Text } from "@chakra-ui/react";

const SidebarLogo = () => {
    return (
        <Flex
            as = "b"
            fontSize = "2xl"
            css = {{
                "WebkitUserSelect": "none",
                "msUserSelect": "none",
                "userSelectg": "none",
            }}
        >
            <Text color = "black">
                Chat
            </Text>
            <Text color = "#3a82f7">
                Talk
            </Text>
        </Flex>
    )
};

export default SidebarLogo;