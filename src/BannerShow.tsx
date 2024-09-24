import React, { useState } from 'react';
import { Box, Input, FormControl, FormLabel, Textarea, Button, Select, Heading } from '@chakra-ui/react';

const BannerCustomizer = () => {
  const [text, setText] = useState("This is the main text.");
  const [secondaryText, setSecondaryText] = useState("This is the secondary text.");
  const [variant, setVariant] = useState("DEFAULT");

  const embedCode = `<div id="banner" data-text="${text}" data-variant="${variant}" data-secondaryText="${secondaryText}"></div>\n<script src="https://main--astrea-banner-widget.netlify.app/index.js"></script>`;

  return (
    <Box maxW="600px" mx="auto" p={4}>
      <Heading mb={6} textAlign="center">Banner Customizer</Heading>
      
      {/* Form Section */}
      <FormControl id="main-text" mb={4}>
        <FormLabel>Main Text</FormLabel>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </FormControl>

      <FormControl id="secondary-text" mb={4}>
        <FormLabel>Secondary Text</FormLabel>
        <Input
          value={secondaryText}
          onChange={(e) => setSecondaryText(e.target.value)}
        />
      </FormControl>

      <FormControl id="variant" mb={4}>
        <FormLabel>Variant</FormLabel>
        <Select value={variant} onChange={(e) => setVariant(e.target.value)}>
          <option value="DEFAULT">Default</option>
          <option value="VARIANT1">Variant 1</option>
          <option value="VARIANT2">Variant 2</option>
        </Select>
      </FormControl>

      {/* Preview Section */}
      <Box bg="gray.100" p={4} borderRadius="md" mb={6}>
        <Box id="banner" data-text={text} data-variant={variant} data-secondarytext={secondaryText}>
          <p>{text}</p>
          <p>{secondaryText}</p>
        </Box>
      </Box>

      {/* Embed Code Section */}
      <FormControl mb={4}>
        <FormLabel>Embed Code</FormLabel>
        <Textarea value={embedCode} readOnly />
      </FormControl>
      <Button colorScheme="blue" onClick={() => navigator.clipboard.writeText(embedCode)}>
        Copy Snippet
      </Button>
    </Box>
  );
};

export default BannerCustomizer;
