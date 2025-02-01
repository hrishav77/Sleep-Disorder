import { useState } from "react";
import { Box, Input, Button, VStack, Text, HStack } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("https://your-api-endpoint.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { sender: "bot", text: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I am having trouble responding right now.",
        },
      ]);
    }
  };

  return (
    <Box
      w={{ base: "100%", md: "400px" }}
      h="500px"
      bg="gray.100"
      borderRadius="md"
      p={4}
      display="flex"
      flexDirection="column"
    >
      <VStack flex={1} overflowY="auto" spacing={3} align="stretch">
        {messages.map((msg, idx) => (
          <HStack
            key={idx}
            alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"}
            bg={msg.sender === "user" ? "blue.500" : "gray.300"}
            color={msg.sender === "user" ? "white" : "black"}
            px={3}
            py={2}
            borderRadius="md"
          >
            <Text>{msg.text}</Text>
          </HStack>
        ))}
      </VStack>
      <HStack mt={4}>
        <Input
          flex={1}
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button colorScheme="blue" onClick={sendMessage}>
          <FaPaperPlane />
        </Button>
      </HStack>
    </Box>
  );
};

export default Chatbot;
