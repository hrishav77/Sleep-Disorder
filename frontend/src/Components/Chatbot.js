import { useState, useEffect, useRef } from "react";
import {
  Box,
  Input,
  Button,
  VStack,
  Text,
  HStack,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { FaPaperPlane, FaCommentDots } from "react-icons/fa";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch(
        "https://sleep-disorder.onrender.com/chatbot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        }
      );

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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <Box
          position="fixed"
          bottom="80px"
          right="20px"
          bg="blue.500"
          color="white"
          px={4}
          py={2}
          borderRadius="md"
          cursor="pointer"
          onClick={() => setIsOpen(true)}
        >
          Hi! Click here to talk
        </Box>
      )}
      <IconButton
        icon={<FaCommentDots />}
        position="fixed"
        bottom="20px"
        right="20px"
        colorScheme="blue"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chatbot"
      />
      {isOpen && (
        <Box
          position="fixed"
          bottom="70px"
          right="20px"
          w={{ base: "100%", md: "400px" }}
          h="400px"
          bg="gray.100"
          borderRadius="md"
          p={4}
          display="flex"
          flexDirection="column"
          boxShadow="lg"
        >
          <Heading size="md" textAlign="center" mb={4}>
            Sleep Disorder Chatbot
          </Heading>
          <VStack
            flex={1}
            overflowY="auto"
            spacing={3}
            align="stretch"
            ref={messagesContainerRef}
          >
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
              onKeyDown={handleKeyDown}
            />
            <Button colorScheme="blue" onClick={sendMessage}>
              <FaPaperPlane />
            </Button>
          </HStack>
        </Box>
      )}
    </>
  );
};

export default Chatbot;
