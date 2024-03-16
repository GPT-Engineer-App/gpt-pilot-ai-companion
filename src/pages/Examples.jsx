import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";

const Examples = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="2xl" mb={4}>
        Examples
      </Heading>
      <Text fontSize="lg">Here you can find some example apps created with GPT Pilot.</Text>
    </Container>
  );
};

export default Examples;
