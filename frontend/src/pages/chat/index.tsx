import { Box } from '@chakra-ui/react';
import Applayout from '../../components/privateroute/applayout';

const Chat = () => {
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
        Chat page
      </Box>
    </Applayout>
  )
}

export default Chat;
