import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.100" py={4} mt={8}>
      <Text textAlign="center" fontSize="sm">
        &copy; {new Date().getFullYear()} GPT Pilot. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
