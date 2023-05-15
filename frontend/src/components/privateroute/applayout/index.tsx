import { Flex, Box, Drawer, DrawerContent, DrawerOverlay, IconButton, useDisclosure, Stack } from "@chakra-ui/react";
import SidebarContent from "./sidebar";
import { FiMenu } from "react-icons/fi";
import { AppLayoutProps } from "../../../interfaces";

const Applayout = ({ children }: AppLayoutProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box 
      as = "section" 
      minH = "100vh"
      overflowY = "hidden"
    >
      <SidebarContent display = {{ base: "none", md: "unset"}} />
      <Drawer
        isOpen = { isOpen }
        onClose = { onClose }
        placement = "left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent
            w = "full"
            borderRight = "none"
          />
        </DrawerContent>
      </Drawer>
      <Box
        ml = {{ base: 0, md: 64 }}
        transition = ".3s ease"
      >
        <Flex
          as = "header"
          align = "center"
          justify = {{ base: "space-between", md: "flex-end"}}
          w = "full"
          px = "4"
          borderBottomWidth = "1px"
          borderColor = "inherit"
          bg = "white"
          boxShadow = "sm"
          h = "14"
        >
          <IconButton
            aria-label = "Menu"
            display = {{ base: "inline-flex", md: "none"}}
            onClick = { onOpen }
            icon = { 
              <FiMenu />
            }
            size = "md"
          />
        </Flex>
        <Box
          as = "main"
          p = "4"
          h = "full"
          bg = "auto"
        >
          <Stack
            direction = {{ base: "column", md: "row" }}
            alignItems = "center"
            justifyContent = "center"
            h = "full"
            overflowY = "auto"
          >
            <Stack spacing = "4">
              { children }
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default Applayout;
