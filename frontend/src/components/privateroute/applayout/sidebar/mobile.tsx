import { Box, List, ListItem, Icon, Flex, Container } from "@chakra-ui/react";
import NavItems from "./navitems";
import { Link } from "react-router-dom";

const MobileFooter = () => {
    // not yet working
    return (
        <Box
            position = "fixed"
            justifyContent = "space-between"
            w = "full"
            bottom = "0"
            zIndex = "100"
            alignItems = "center"
            bg = "white"
            borderTopWidth = "1px"
            display = {{ base: "flex", lg: "none" }}
        >
            <List
                display = "flex"
                flexDirection = "row"
                alignContent = "center"
                justifyContent = "center"
                spacing = { 1 }
                w = "full"
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
                        </ListItem>
                    </Link>
                ))}     
            </List>
        </Box>
    )
};

export default MobileFooter;