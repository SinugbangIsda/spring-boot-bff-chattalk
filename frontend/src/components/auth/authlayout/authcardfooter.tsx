import { Stack, Center, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AuthCardFooterProps } from '../../../interfaces';

const AuthCardFooter = ({ message, navigateText, navigateLink, navigateBack }: AuthCardFooterProps) => {
  return (
    <Stack 
        spacing = { 3 }
        py = { 2 }
    >
        { !navigateBack && (
            <Center>
                <Flex
                    css = {{
                        "WebkitUserSelect": "none",
                        "msUserSelect": "none",
                        "userSelectg": "none",
                    }}
                    color = "black"
                >
                    <Text
                        mr = { 1 }
                    >
                        { message }
                    </Text>
                    <Link to = { navigateLink! }>
                        <Text
                            color = "#3a82f7"
                            _hover = {{
                                color: "#2a63c2"
                            }}
                        >
                            { navigateText }
                        </Text>
                    </Link>
                </Flex>
            </Center>
        )}
        { navigateBack && (
            <Flex
                css = {{
                    "WebkitUserSelect": "none",
                    "msUserSelect": "none",
                    "userSelectg": "none",
                }}
                color = "black"
            >
                <Link to = { navigateLink! }>
                    <Text
                        color = "#3a82f7"
                        _hover = {{
                            color: "#2a63c2"
                        }}
                    >
                        Go back to { navigateText }
                    </Text>
                </Link>
            </Flex>
        )}
    </Stack>
  )
}

export default AuthCardFooter;
