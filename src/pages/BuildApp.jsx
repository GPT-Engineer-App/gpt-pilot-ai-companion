import React, { useState } from "react";
import { Container, Heading, Box, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";

const BuildApp = () => {
  const [appName, setAppName] = useState("");
  const [appDescription, setAppDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedApp, setGeneratedApp] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/build-app", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ appName, appDescription }),
    });

    const data = await response.json();
    setGeneratedApp(data);
    setLoading(false);
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="2xl" mb={4}>
        Build a Web App
      </Heading>

      <Box mb={8}>
        <form onSubmit={handleSubmit}>
          <FormControl id="appName" mb={4}>
            <FormLabel>App Name</FormLabel>
            <Input type="text" value={appName} onChange={(e) => setAppName(e.target.value)} />
          </FormControl>
          <FormControl id="appDescription" mb={4}>
            <FormLabel>App Description</FormLabel>
            <Input type="text" value={appDescription} onChange={(e) => setAppDescription(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue" isLoading={loading}>
            Build App
          </Button>
        </form>
      </Box>

      {generatedApp && (
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Generated App
          </Heading>
          <Text whiteSpace="pre-wrap">{generatedApp.code}</Text>
        </Box>
      )}
    </Container>
  );
};

export default BuildApp;
