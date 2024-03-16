import React, { useState } from "react";
import { Container, Heading, Box, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setSubscribed(true);
    }
    setLoading(false);
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="2xl" mb={4}>
        Contact Us
      </Heading>
      {subscribed ? (
        <Text fontSize="lg">Thank you for subscribing!</Text>
      ) : (
        <Box mb={8}>
          <form onSubmit={handleSubmit}>
            <FormControl id="email" mb={4}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="blue" isLoading={loading}>
              Subscribe
            </Button>
          </form>
        </Box>
      )}
    </Container>
  );
};

export default Contact;
