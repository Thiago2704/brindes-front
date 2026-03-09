import { Box, Container, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { HOME_CATEGORIAS } from './homeData'

export const HomeCategoriasSection = () => (
  <Box bg="white" py={14}>
    <Container maxW="7xl">
      <Heading as="h2" textAlign="center" fontSize="2xl" fontWeight="700" color="#1a1616" mb={10}>
        Nossas Categorias
      </Heading>
      <HStack justify="center" gap={{ base: 4, md: 8 }} flexWrap="wrap">
        {HOME_CATEGORIAS.map((cat) => (
          <VStack
            key={cat.label}
            gap={3}
            cursor="pointer"
            bg="#fafafa"
            borderRadius="xl"
            px={12}
            py={6}
            w={{ base: '160px', md: '200px' }}
            _hover={{ transform: 'translateY(-2px)', bg: 'gray.100' }}
            transition="all 0.2s"
            color="gray.700"
          >
            {cat.icon}
            <Text fontSize="sm" fontWeight="500" color="gray.700">
              {cat.label}
            </Text>
          </VStack>
        ))}
      </HStack>
    </Container>
  </Box>
)
