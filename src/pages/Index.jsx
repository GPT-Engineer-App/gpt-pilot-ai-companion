import { Box, Container, Heading, Text, Link, Image, VStack, Code, Divider, Button, List, ListItem, ListIcon, useColorMode } from "@chakra-ui/react";
import { FaDiscord, FaDocker, FaPython, FaGithub, FaStar, FaEnvelope, FaPlay, FaPlug } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} alignItems="flex-start">
        <Heading as="h1" size="2xl">
          🧑‍✈️ GPT PILOT 🧑‍✈️
        </Heading>
        <Text fontSize="lg">GPT Pilot doesn't just generate code, it builds apps!</Text>
        <Text fontSize="lg">
          See it in action
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" isExternal ml={2}>
            (click to open the video in YouTube) (1:40min)
          </Link>
        </Text>
        <Divider />
        <Text fontSize="lg">GPT Pilot is the core technology for the Pythagora VS Code extension that aims to provide the first real AI developer companion. Not just an autocomplete or a helper for PR messages but rather a real AI developer that can write full features, debug them, talk to you about issues, ask for review, etc.</Text>
        <Box>
          <Text fontSize="lg">📫 If you would like to get updates on future releases or just get in touch, join our Discord server or you can add your email here. 📬</Text>
          <Button leftIcon={<FaEnvelope />} colorScheme="blue" mt={2}>
            Subscribe via Email
          </Button>
          <Button leftIcon={<FaDiscord />} colorScheme="purple" mt={2} ml={2}>
            Join Discord
          </Button>
        </Box>
        <Heading as="h2" size="xl">
          🔌 Requirements
        </Heading>
        <List spacing={2}>
          <ListItem>
            <ListIcon as={FaPython} />
            Python 3.9+
          </ListItem>
          <ListItem>
            <ListIcon as={FaDocker} />
            Docker (optional)
          </ListItem>
        </List>
        <Heading as="h2" size="xl">
          🚦How to start using gpt-pilot?
        </Heading>
        <Text fontSize="lg">👉 If you are using VS Code as your IDE, the easiest way to start is by downloading GPT Pilot VS Code extension. 👈</Text>
        {/* The rest of the content goes here */}
        {/* ... */}
        <Button onClick={toggleColorMode} leftIcon={colorMode === "light" ? <FaPlay /> : <FaPlug />}>
          {colorMode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </Button>
        <Divider />
        <Heading as="h2" size="xl">
          🔗 Connect with us
        </Heading>
        {/* Social media and contact links */}
        <Box>
          <Button leftIcon={<FaGithub />} colorScheme="gray" mt={2}>
            GitHub
          </Button>
          <Button leftIcon={<FaStar />} colorScheme="yellow" mt={2} ml={2}>
            Star on GitHub
          </Button>
        </Box>
        <Divider />
        <Heading as="h2" size="xl">
          💬 Join the Discord server to get in touch.
        </Heading>
        <Button leftIcon={<FaDiscord />} colorScheme="purple" mt={2}>
          Join Discord
        </Button>
        <Divider />
        <Text fontSize="lg">🌟 As an open-source tool, it would mean the world to us if you starred the GPT-pilot repo 🌟</Text>
        {/* Footer or additional sections */}
      </VStack>
    </Container>
  );
};

export default Index;
