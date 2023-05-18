// import { Avatar, Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text, VStack, HStack, IconButton, useDisclosure } from "@chakra-ui/react";
// import { TbEdit } from "react-icons/all";
// import ChatListItem from "../../chat/chatlistitem";
// import { Link } from "react-router-dom";
// import { useRef, useState, ChangeEvent } from "react";
// import SearchInput from "../../chat/chatsearch";
// import SidebarLogo from "./logo";
// import NewChatModal from "../../chat/newchatmodal";
// import menu from "../../../../assets/data/menu.json";
// import users from "../../../../assets/data/users.json";

import { Box } from "@chakra-ui/react";
import DesktopSidebar from "./desktop";
import MobileFooter from "./mobile";

// const SidebarContent = ({ ...props }: any) => {
//     const [ query, setQuery ] = useState<string>("");
//     const searchRef = useRef<HTMLInputElement>(null);
//     const { isOpen, onOpen, onClose } = useDisclosure();

//     const filteredItems = users.filter((item) => {
//         return item.name.toLowerCase().includes(query.toLowerCase());
//     });

//     const randomColor = () => {
//         let color = "#";
//         do {
//           color += Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
//         } while (color.match(/^(#)?([0-9a-f]{2})\2\2$/i) || color === "#ffffff");
//         return color.slice(0, 7);
//     };
    
//     return (
//         <>
//             <Box
//                 as = "nav"
//                 pos = "fixed"
//                 top = "0"
//                 left = "0"
//                 zIndex = "sticky"
//                 h = "full"
//                 bg = "white"
//                 borderColor = "inherit"
//                 borderRightWidth = "1px"
//                 w = {{
//                     base: "full",
//                     md: "64"
//                 }}
//                 { ...props }
//             >
//                 <VStack 
//                     h = "full" 
//                     w = "full" 
//                     alignItems = "flex-start" 
//                     justify = "space-between"
//                 >
//                     <Box w = "full">
//                         <Box
//                             w = "full"
//                             borderBottomWidth = "1px"
//                             borderColor = "inherit"
//                             bg = "white"
//                             px = "4"
//                             py = "2"
//                         >
//                             <Flex 
//                                 align = "center"
//                                 justify = "space-between"
//                             >
//                                 <SidebarLogo />
//                                 <IconButton
//                                     aria-label = "New chat"
//                                     h = "1.75rem"
//                                     size = "sm"
//                                     onClick = { onOpen }
//                                 >
//                                     <TbEdit />
//                                 </IconButton>
//                             </Flex>
//                             <SearchInput 
//                                 inputRef = { searchRef }
//                                 value = { query }
//                                 onChange = {(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value) }
//                                 onClick = {() => searchRef.current?.focus()}
//                             />
//                         </Box>
//                         <Box
//                             w = "full"
//                             height = "38rem"
//                             overflowY = "auto"
//                         >
//                             <Flex
//                                 direction = "column"
//                                 as = "nav"
//                                 fontSize = "md"
//                                 color = "gray.600"
//                                 aria-label = "Main Navigation"
//                             >
//                                 { filteredItems.map((item) => (
//                                     <Link 
//                                         to = { `/chat/${ item.id }` }
//                                         key = { item.id }    
//                                     >
//                                         <ChatListItem
//                                             avatar = {
//                                                 <Avatar
//                                                     size = "md"
//                                                     name = { item.name }
//                                                     bg = { randomColor() }
//                                                     color = "white"
//                                                     fontWeight = "semibold"
//                                                     css = {{
//                                                         "WebkitUserSelect": "none",
//                                                         "MozUserSelect": "none",
//                                                         "userSelect": "none"
//                                                     }}
//                                                     mr = "3"
//                                                 />
//                                             }
//                                         >
//                                             <Text
//                                                 fontSize = "sm"
//                                                 fontWeight = "semibold"
//                                                 color = "black"
//                                             >
//                                                 { item.name }
//                                             </Text>
//                                         </ChatListItem>
//                                     </Link>
//                                 ))}
//                             </Flex>
//                         </Box>
//                     </Box>
//                     <Box
//                         w = "full"
//                         borderTopWidth = "1px"
//                         borderColor = "inherit"
//                         bg = "white"
//                         h = "20"
//                     >
//                         <Menu>
//                             <MenuButton
//                                 as = { Button }
//                                 size = "sm"
//                                 rounded = "full"
//                                 variant = "link"
//                                 cursor = "pointer"
//                                 _hover = {{ 
//                                     textDecoration: "none" 
//                                 }}
//                                 w = "full"
//                                 textAlign = "left"
//                                 p = "4"
//                             >
//                                 <HStack>
//                                     <Avatar
//                                         size = "md"
//                                         name = "James Weed"
//                                         bg = "black"
//                                         color = "white"
//                                         fontWeight = "semibold"
//                                         css = {{
//                                             "WebkitUserSelect": "none",
//                                             "MozUserSelect": "none",
//                                             "userSelectg": "none"
//                                         }}
//                                     />
//                                     <Text
//                                         fontSize = "sm"
//                                         color = "black"
//                                     >
//                                         James Weed
//                                     </Text>
//                                 </HStack>
//                             </MenuButton>
//                             <MenuList 
//                                 fontSize = { 17 } 
//                                 zIndex = { 5555 }
//                             >
//                                 { menu.map((item) => (
//                                     <Link 
//                                         to = { item.url }
//                                         key = { item.name }    
//                                     >
//                                         <MenuItem>
//                                             { item.name }
//                                         </MenuItem>
//                                     </Link>
//                                 ))}
//                                 <MenuItem>
//                                     Logout
//                                 </MenuItem>
//                             </MenuList>
//                         </Menu>
//                     </Box>
//                 </VStack>
//             </Box>
//             <NewChatModal 
//                 isOpen = { isOpen }
//                 onClose = { onClose }
//             />
//         </> 
//     )
// };

// export default SidebarContent;

const Sidebar = ({ children }: any) => {
    return (
        <Box 
            h = "full"
        >
            <DesktopSidebar />
            <MobileFooter />
            <Box
                h = "full"
                pl = {{ lg: "20" }}
            >
                { children }
            </Box>
        </Box>
    )
};

export default Sidebar;