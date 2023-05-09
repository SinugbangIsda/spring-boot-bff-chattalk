import { Avatar, Box, Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react";
import { RiFlashlightFill } from "react-icons/ri";
import ChatListItem from "../../chat/chatlistitem";

const SidebarContent = ({ ...props }: any) => {
    return (
        <Box
            as = "nav"
            pos = "fixed"
            top = "0"
            left = "0"
            zIndex = "sticky"
            h = "full"
            overflowX = "hidden"
            overflowY = "auto"
            bg = "white"
            borderColor = "inherit"
            borderRightWidth = "1px"
            w = {{
                base: "full",
                md: "64"
            }}
        >
           <VStack 
                h = "full" 
                w = "full" 
                alignItems = "flex-start" 
                justify = "space-between"
            >
                <Box w = "full">
                    <Flex 
                        px = "4" 
                        py = "5" 
                        align = "center"
                    >
                        <Icon 
                            as = { RiFlashlightFill } 
                            h = { 8 } 
                            w = { 8 } 
                        />
                        <Text
                            fontSize = "2xl"
                            ml = "2"
                            color = "black"
                            fontWeight = "semibold"
                        >
                            ChatTalk
                        </Text>
                    </Flex>
                    <Flex
                        direction = "column"
                        as = "nav"
                        fontSize = "md"
                        color = "gray.600"
                        aria-label = "Main Navigation"
                    >
                        <ChatListItem
                            avatar = {
                                <Avatar 
                                    size = "md"
                                    name = "James Weed"
                                    bg = "black"
                                    color = "white"
                                    fontWeight = "semibold"
                                    css = {{
                                        "WebkitUserSelect": "none",
                                        "MozUserSelect": "none",
                                        "userSelectg": "none"
                                    }}
                                    mr = "3"
                                />
                            }
                        >
                            <Text
                                fontSize = "sm"
                                fontWeight = "semibold"
                                color = "black"
                            >
                                User 1
                            </Text>
                        </ChatListItem>
                        <ChatListItem
                            avatar = {
                                <Avatar
                                    size = "md"
                                    name = "James Weed"
                                    bg = "black"
                                    color = "white"
                                    fontWeight = "semibold"
                                    css = {{
                                        "WebkitUserSelect": "none",
                                        "MozUserSelect": "none",
                                        "userSelect": "none"
                                    }}
                                    mr = "3"
                                />
                            }
                        >
                            <Text
                                fontSize = "sm"
                                fontWeight = "semibold"
                                color = "black"
                            >
                                User 2
                            </Text>
                        </ChatListItem>
                        <ChatListItem
                            avatar = {
                                <Avatar
                                    size = "md"
                                    name = "James Weed"
                                    bg = "black"
                                    color = "white"
                                    fontWeight = "semibold"
                                    css = {{
                                        "WebkitUserSelect": "none",
                                        "MozUserSelect": "none",
                                        "userSelect": "none"
                                    }}
                                    mr = "3"
                                />
                            }
                        >
                            <Text
                                fontSize = "sm"
                                fontWeight = "semibold"
                                color = "black"
                            >
                                User 3
                            </Text>
                        </ChatListItem>
                    </Flex>
                </Box>
                <Flex 
                    px = "4" 
                    py = "5" 
                    mt = { 10 } 
                    justify = "center" 
                    alignItems = "center"
                >
                    <Menu>
                        <MenuButton
                            as = { Button }
                            size = "sm"
                            rounded = "full"
                            variant = "link"
                            cursor = "pointer"
                            _hover = {{ 
                                textDecoration: "none" 
                            }}
                        >
                            <Avatar
                                size = "md"
                                name = "James Weed"
                                bg = "black"
                                color = "white"
                                fontWeight = "semibold"
                                css = {{
                                    "WebkitUserSelect": "none",
                                    "MozUserSelect": "none",
                                    "userSelectg": "none"
                                }}
                            />
                        </MenuButton>
                        <MenuList 
                            fontSize = { 17 } 
                            zIndex = { 5555 }
                        >
                            <MenuItem>
                                My profile
                            </MenuItem>
                            <MenuItem>
                                Change password
                            </MenuItem>
                            <MenuItem>
                                Logout
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </VStack>
        </Box>
    )
};

export default SidebarContent;