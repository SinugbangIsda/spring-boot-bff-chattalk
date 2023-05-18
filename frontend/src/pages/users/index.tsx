import React from 'react';
import AppLayout from '../../components/privateroute/applayout';
import { Box } from '@chakra-ui/react';

const Users = () => {
  return (
    <AppLayout>
        <Box
            py = "10"
            px = {{ sm: "6", lg: "8"}}
            h = "full"
            display = "flex"
            justifyContent = "center"
            alignItems = "center"
            bg = "gray.50"
        >
            Users page
        </Box>
    </AppLayout>
  )
}

export default Users;
