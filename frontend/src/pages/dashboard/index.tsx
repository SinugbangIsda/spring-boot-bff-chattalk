import { VStack, Text } from "@chakra-ui/react";
import Applayout from "../../components/privateroute/applayout";
import { IoLogoWechat } from "react-icons/all";

const Dashboard = () => {
  return (
    <Applayout>
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
    </Applayout>
  )
}

export default Dashboard;