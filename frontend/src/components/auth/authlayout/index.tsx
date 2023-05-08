import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { AuthLayoutProps } from "../../../interfaces";

const AuthLayout = ({ heading, formComponent, footer }: AuthLayoutProps) => {
    return (
        <Flex
            minH = "100vh"
            align = "center"
            justify = "center"
            bg = "#f7f7f7"
        >
            <Container maxW = "lg">
                <Stack 
                    mx = "auto"
                    my = "2"
                >
                    <Stack align = "center">
                        <Flex
                            as = "b"
                            fontSize = "3xl"
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
                    </Stack>
                    <Box
                        rounded = "lg" 
                        bg = "white"
                        boxShadow = "xl"
                        p = { 12 }
                    >
                        <Stack>
                            <Text 
                                align = "center"
                                as = "b"
                                fontSize = "xl"
                            >
                                { heading }
                            </Text>
                            { formComponent }
                            { footer }
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Flex>
    )
};

export default AuthLayout;