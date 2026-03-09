import { Box, HStack, SimpleGrid, Text } from '@chakra-ui/react'

type Props = {
  caracteristicas: string[]
}

export const ProdutoCaracteristicas = ({ caracteristicas }: Props) => (
  <Box py={10}>
    <Text fontSize="lg" fontWeight="700" color="#1a1616" mb={6}>
      Características do Produto
    </Text>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
      {caracteristicas.map((item) => (
        <HStack key={item} gap={3} align="start">
          <Box color="green.500" flexShrink={0} mt="1px">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </Box>
          <Text fontSize="sm" color="gray.700">{item}</Text>
        </HStack>
      ))}
    </SimpleGrid>
  </Box>
)
