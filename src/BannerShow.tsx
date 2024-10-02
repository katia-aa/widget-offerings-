import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Select,
  Heading,
  Tooltip,
  Divider,
  useToast,
  IconButton,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

const BannerCustomizer = () => {
  const [text, setText] = useState("This is the main text.");
  const [secondaryText, setSecondaryText] = useState(
    "This is the secondary text."
  );
  const [variant, setVariant] = useState("DEFAULT");

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const toast = useToast();

  const embedCode = `<div id="banner" data-text="${text}" data-variant="${variant}" data-secondaryText="${secondaryText}"></div>\n<script src="https://main--astrea-banner-widget.netlify.app/index.js"></script>`;

  const sendMessageToIframe = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      // Make sure we have valid values before sending
      iframe.contentWindow.postMessage(
        {
          text: text || "This is the main text",
          secondaryText: secondaryText || "This is the secondary text",
          variant,
        },
        "*"
      );
    }
  };

  // Ensure iframe is loaded before sending messages
  useEffect(() => {
    const iframe = iframeRef.current;

    if (iframe) {
      iframe.onload = () => {
        sendMessageToIframe(); // Send initial message once iframe is loaded
      };
    }
  }, []);

  // Send updates whenever the state changes
  useEffect(() => {
    sendMessageToIframe();
  }, [text, secondaryText, variant]);

  const copySnippet = () => {
    navigator.clipboard.writeText(embedCode);
    toast({
      title: "Embed code copied.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box
      maxW="700px"
      mx="auto"
      p={6}
      bg="rgba(255, 255, 255, 0.15)"
      backdropFilter="blur(10px)"
      borderRadius="20px"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
    >
      <Heading
        mb={6}
        textAlign="center"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
      >
        Banner Customizer
      </Heading>

      {/* Form Section */}
      <Box
        bg="rgba(255, 255, 255, 0.15)"
        p={4}
        borderRadius="md"
        mb={6}
        border="1px solid rgba(255, 255, 255, 0.3)"
        backdropFilter="blur(10px)"
        boxShadow="0 8px 32px rgba(0, 0, 0, 0.05)"
      >
        <Heading size="md" mb={4} color="white">
          Customize Your Banner
        </Heading>

        <FormControl id="main-text" mb={4}>
          <FormLabel color="white">Main Text</FormLabel>
          <Tooltip
            label="Enter the main message that will be displayed on the banner"
            placement="top"
          >
            <Input
              placeholder="Enter main text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              bg="rgba(255, 255, 255, 0.25)"
              color="white"
              border="1px solid rgba(255, 255, 255, 0.4)"
              _hover={{ borderColor: "white" }}
            />
          </Tooltip>
        </FormControl>

        <FormControl id="secondary-text" mb={4}>
          <FormLabel color="white">Secondary Text</FormLabel>
          <Tooltip
            label="Enter the supporting text displayed below the main text"
            placement="top"
          >
            <Input
              placeholder="Enter secondary text"
              value={secondaryText}
              onChange={(e) => setSecondaryText(e.target.value)}
              bg="rgba(255, 255, 255, 0.25)"
              color="white"
              border="1px solid rgba(255, 255, 255, 0.4)"
              _hover={{ borderColor: "white" }}
            />
          </Tooltip>
        </FormControl>

        <FormControl id="variant" mb={4}>
          <FormLabel color="white">Banner Variant</FormLabel>
          <Tooltip
            label="Choose a style variant for your banner"
            placement="top"
          >
            <Select
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
              bg="rgba(255, 255, 255, 0.25)"
              color="white"
              border="1px solid rgba(255, 255, 255, 0.4)"
              _hover={{ borderColor: "white" }}
            >
              <option value="DEFAULT">Default</option>
              <option value="VARIANT1">Variant 1</option>
              <option value="VARIANT2">Variant 2</option>
            </Select>
          </Tooltip>
        </FormControl>
      </Box>

      {/* Preview Section */}
      <Heading size="md" mb={4} color="white">
        Live Preview
      </Heading>
      <Box
        position="relative"
        bg="rgba(255, 255, 255, 0.15)"
        p={4}
        borderRadius="md"
        mb={6}
        border="1px solid rgba(255, 255, 255, 0.3)"
        backdropFilter="blur(10px)"
        boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
        transition="box-shadow 0.2s"
        _hover={{ boxShadow: "0 12px 36px rgba(0, 0, 0, 0.2)" }}
      >
        <iframe
          ref={iframeRef}
          src="/banner-preview.html"
          title="Banner Preview"
          style={{ width: "100%", height: "300px", border: "none" }}
        ></iframe>

        {/* Copy Snippet Button on Preview */}
        <IconButton
          icon={<CopyIcon />}
          aria-label="Copy Embed Code"
          position="absolute"
          top="10px"
          right="10px"
          colorScheme="pink"
          onClick={copySnippet}
          _hover={{ bg: "pink.600" }}
        />
      </Box>

      <Divider
        my={6}
        borderColor="rgba(255
      , 255, 255, 0.3)"
      />

      {/* Embed Code Section */}
      <Heading size="md" mb={4} color="white">
        Embed Code
      </Heading>
      <Box
        bg="rgba(255, 255, 255, 0.15)"
        p={4}
        borderRadius="md"
        border="1px solid rgba(255, 255, 255, 0.3)"
        backdropFilter="blur(10px)"
        boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
      >
        <Textarea
          value={embedCode}
          readOnly
          bg="rgba(255, 255, 255, 0.25)"
          color="white"
          border="1px solid rgba(255, 255, 255, 0.4)"
          _hover={{ borderColor: "white" }}
          mb={4}
        />
        <Button colorScheme="pink" onClick={copySnippet}>
          Copy Embed Code
        </Button>
      </Box>
    </Box>
  );
};

export default BannerCustomizer;
