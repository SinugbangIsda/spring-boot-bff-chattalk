import { Box, Icon, List, ListItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavItems from "./navitems";
import MenuItems from "./menuitems";

const DesktopSidebar = () => {
    return (
        <Box
            display = {{ base: "none", lg: "block" }}
            position = "fixed"
            insetY = "0"
            left = "0"
            zIndex = "40"
            width = {{ lg: "20" }}
            overflowY = {{ lg: "auto" }}
            backgroundColor = {{ lg: "white" }}
            borderRightWidth = {{ lg: "1px" }}
            borderColor = {{ lg: "inherit" }}
            paddingBottom = {{ lg: "4" }}
            flexDirection = {{ lg: "column" }}
            justifyContent = {{ lg: "space-between" }}
        >
            <Box
                mt = "4"
                display = "flex"
                flexDirection = "column"
                justifyContent = "space-between"
            >
                <List
                    display = "flex"
                    flexDirection = "column"
                    alignContent = "center"
                    justifyContent = "center"
                    spacing = { 1 }
                >
                    { NavItems.map((item, index) => (
                        <Link
                            key = { index }
                            to = { item.url }
                        >
                            <ListItem
                                display = "flex"
                                justifyContent = "center"
                                alignItems = "center"
                                height = "10"
                                borderRadius = "md"
                                cursor = "pointer"
                                textAlign = "center"
                                p = "3"
                                fontSize = "sm"
                                color = "gray.600"
                                _hover = {{
                                    color: "gray.900"
                                }}
                            >
                                <Icon 
                                    as = { item.icon }  
                                    h = "6"
                                    w = "6"
                                    flexShrink = "0"
                                />
                                <Text srOnly>
                                    { item.label }
                                </Text>
                            </ListItem>
                        </Link>
                    ))}     
                </List>
            </Box>
        </Box>
    )
};

export default DesktopSidebar;