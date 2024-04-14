import { Box, Button, Container, Flex, Grid, Heading, HStack, Icon, Image, Input, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaUser, FaShoppingBag, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Box as="header" bg="white" borderBottomWidth="1px" py={4}>
        <Container maxW="container.xl">
          <Flex align="center" justify="space-between">
            {/* Logo */}
            <Heading as="h1" size="lg" letterSpacing="wider">
              VOGUE
            </Heading>

            {/* Links */}
            <HStack as="nav" spacing={8} display={{ base: "none", md: "flex" }}>
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </HStack>

            {/* Icons */}
            <HStack>
              <Icon as={FaSearch} w={5} h={5} />
              <Icon as={FaUser} w={5} h={5} />
              <Icon as={FaShoppingBag} w={5} h={5} />
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero */}
      <Box bgImage="https://images.unsplash.com/photo-1664925502795-83a700f7843c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwd29tYW4lMjB3ZWFyaW5nJTIwZHJlc3N8ZW58MHx8fHwxNzEzMDcwMjkyfDA&ixlib=rb-4.0.3&q=80&w=1080" bgPos="center" bgSize="cover" h="80vh">
        <Container maxW="container.xl" h="full">
          <Stack justify="center" h="full" maxW="lg" color="white">
            <Heading as="h1" size="3xl">
              Elevate Your Style
            </Heading>
            <Text fontSize="xl">Look and feel your best with our premium collection.</Text>
            <Button colorScheme="white" size="lg">
              Shop Now
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Categories */}
      <Container maxW="container.xl" my={20}>
        <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={8}>
          <VStack>
            <Image src="https://images.unsplash.com/photo-1605069217614-dc5de5961d93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXclMjBhcnJpdmFscyUyMGNsb3RoaW5nfGVufDB8fHx8MTcxMzA3MDI5M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="New Arrivals" />
            <Heading as="h3" size="md">
              New Arrivals
            </Heading>
          </VStack>
          <VStack>
            <Image src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkcmVzc2VzJTIwb24lMjByYWNrfGVufDB8fHx8MTcxMzA3MDI5M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Dresses" />
            <Heading as="h3" size="md">
              Dresses
            </Heading>
          </VStack>
          <VStack>
            <Image src="https://images.unsplash.com/photo-1560243563-062bfc001d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGplYW5zfGVufDB8fHx8MTcxMzA3MDI5M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Denim" />
            <Heading as="h3" size="md">
              Denim
            </Heading>
          </VStack>
          <VStack>
            <Image src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBmbGF0JTIwbGF5fGVufDB8fHx8MTcxMzA3MDI5NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Accessories" />
            <Heading as="h3" size="md">
              Accessories
            </Heading>
          </VStack>
        </Grid>
      </Container>

      {/* Promo Banner */}
      <Box bg="gray.100" py={12}>
        <Container maxW="container.md" textAlign="center">
          <Heading>25% off your first order</Heading>
          <Text fontSize="lg" mt={2}>
            Use code WELCOME at checkout
          </Text>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={12}>
        <Container maxW="container.xl">
          <Stack direction={{ base: "column", md: "row" }} justify="space-between">
            <VStack align="start">
              <Heading as="h4" size="md" mb={4}>
                Customer Service
              </Heading>
              <Link href="#">Shipping & Returns</Link>
              <Link href="#">FAQs</Link>
              <Link href="#">Contact Us</Link>
            </VStack>
            <VStack align="start">
              <Heading as="h4" size="md" mb={4}>
                Connect
              </Heading>
              <HStack>
                <Icon as={FaFacebookF} />
                <Icon as={FaTwitter} />
                <Icon as={FaInstagram} />
              </HStack>
            </VStack>
            <VStack align={{ base: "start", md: "end" }}>
              <Heading as="h4" size="md" mb={4}>
                Sign Up for Our Newsletter
              </Heading>
              <HStack>
                <Input placeholder="Enter email" />
                <Button colorScheme="white">Sign Up</Button>
              </HStack>
            </VStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
