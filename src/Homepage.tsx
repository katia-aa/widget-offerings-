import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Input,
  HStack,
  Icon,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { FiMail, FiMessageSquare } from "react-icons/fi";

export default function Homepage() {
  return (
    <Box bg="gray.100" minH="100vh">
      {/* Header Section */}
      <Box
        color="gray.900"
        py={[8, 16]}
        px={[4, 8]}
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={6} textAlign="center">
          <Heading as="h1" size={["xl", "2xl"]} fontWeight="bold">
            Powerful Widgets for Your Website in Minutes
          </Heading>
          <Text fontSize={["md", "lg"]}>
            No coding needed. Boost engagement and conversions instantly with
            simple, easy-to-use widgets.
          </Text>
          <Button
            size="lg"
            colorScheme="teal"
            px={8}
            onClick={() => {
              const featuresSection =
                document.getElementById("features-section");
              if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get Started
          </Button>
        </VStack>
      </Box>
      {/* Features Section */}
      <Box
        id="features-section"
        py={[8, 16]}
        px={[4, 8]}
        bg="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
      >
        <Box mx="auto">
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            Widgets You Can Add
          </Heading>
          <SimpleGrid
            columns={[1, null, 2]}
            spacing={10}
            maxW="1200px"
            mx="auto"
          >
            {/* Newsletter Widget */}
            <Box
              p={6}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              textAlign="center"
              height="fit-content"
            >
              <Icon as={FiMail} w={12} h={12} color="teal.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Newsletter Popup
              </Heading>
              <Text fontSize="md" mb={6}>
                Easily add a customizable newsletter sign-up form to your site
                and grow your audience.
              </Text>
              <Button
                colorScheme="teal"
                size="md"
                as={Link}
                href="/widget-offerings-/banner-customizer"
              >
                Try it Now
              </Button>
            </Box>

            {/* General Popup Widget */}
            <Box
              p={6}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              textAlign="center"
              height="fit-content"
            >
              <Icon
                as={FiMessageSquare}
                w={12}
                h={12}
                color="teal.500"
                mb={4}
              />
              <Heading as="h3" size="lg" mb={4}>
                General Popup
              </Heading>
              <Text fontSize="md" mb={6}>
                Promote offers or announcements with an engaging popup on your
                website.
              </Text>
              <Button colorScheme="teal" size="md">
                Learn More
              </Button>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <Box py={[8, 16]} px={[4, 8]} bg="gray.50" minHeight="50vh">
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          How It Works
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={10} maxW="1200px" mx="auto">
          <Box>
            <Heading as="h3" size="md" mb={4}>
              Step 1: Copy the Widget Code
            </Heading>
            <Text fontSize="lg">
              Get the widget code and paste it directly into your website's
              embed block.
            </Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4}>
              Step 2: Customize Your Widget
            </Heading>
            <Text fontSize="lg">
              Easily personalize the widget’s design and functionality to match
              your brand.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Feedback Section */}
      <Box pt={16} bg="white" p={8} borderRadius="md" boxShadow="md">
        <Heading as="h2" size="lg" mb={6} color="gray.700" textAlign="center">
          Feedback
        </Heading>
        <Text color="gray.600" mb={4} textAlign="center">
          Have suggestions or found a bug? Let us know!
        </Text>
        <VStack spacing={4} maxW="400px" mx="auto">
          <Input
            placeholder="Your email"
            size="lg"
            focusBorderColor="teal.400"
          />
          <Input
            placeholder="Your feedback"
            size="lg"
            focusBorderColor="teal.400"
          />
          <Button colorScheme="teal" size="lg" width="100%">
            Submit Feedback
          </Button>
        </VStack>
      </Box>

      <Box py={8} px={[4, 8]} bg="gray.900" color="white">
        <VStack spacing={4} textAlign="center">
          <Text>&copy; 2024 Widgetify. All rights reserved.</Text>
          <Link href="#" color="teal.300" _hover={{ color: "teal.400" }}>
            Privacy Policy
          </Link>
        </VStack>
      </Box>
    </Box>
  );
}
