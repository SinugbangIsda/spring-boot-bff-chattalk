import { VStack, Text, Box } from "@chakra-ui/react";
import Applayout from "../../components/privateroute/applayout";
import { IoLogoWechat } from "react-icons/all";

const Dashboard = () => {
  return (
    <Applayout>
      <Box
        py = "10"
        px = {{ sm: "6", lg: "8"}}
        h = "full"
        display = "flex"
        justifyContent = "center"
        alignItems = "center"
        bg = "gray.50"
      >
        <VStack>
          <Text
            color = "gray.500"
            fontSize = "7xl"
            textAlign = "center"
          >
            <IoLogoWechat />
          </Text>
          <Text
            color = "gray.500"
            fontSize = "xl"
            textAlign = "center"
          >
            Choose a conversation to participate in or initiate a fresh one.
          </Text>
        </VStack>
      </Box>
    </Applayout>
  )
}

export default Dashboard;