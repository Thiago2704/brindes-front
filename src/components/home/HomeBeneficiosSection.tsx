import { Box, Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { HOME_BENEFICIOS } from './homeData'

export const HomeBeneficiosSection = () => (
  <Box bg="white" py={14}>
    <Container maxW="7xl">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={8}>
        {HOME_BENEFICIOS.map((beneficio) => (
          <VStack key={beneficio.label} gap={3} align="center" textAlign="center">
            <Box color="#1a1616">{beneficio.icon}</Box>
            <Text fontWeight="700" fontSize="sm" color="#1a1616">
              {beneficio.label}
            </Text>
            <Text fontSize="xs" color="gray.500" lineHeight="1.6">
              {beneficio.desc}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
)
