import { Box, SimpleGrid, Text, VStack, HStack } from '@chakra-ui/react'
import { StarRating } from './StarRating'
import type { ProdutoAvaliacao } from './produtoData'

type Props = {
  avaliacoes: ProdutoAvaliacao[]
}

const AvaliacaoCard = ({ avaliacao }: { avaliacao: ProdutoAvaliacao }) => (
  <Box border="1px solid" borderColor="gray.100" borderRadius="md" p={5}>
    <StarRating value={avaliacao.estrelas} size={15} />
    <Text fontSize="sm" color="gray.700" mt={3} mb={4} lineHeight="1.6">
      {avaliacao.texto}
    </Text>
    <HStack justify="space-between" align="end">
      <VStack align="start" gap={0}>
        <Text fontSize="xs" fontWeight="600" color="#1a1616">{avaliacao.nome}</Text>
        <Text fontSize="xs" color="gray.500">{avaliacao.empresa}</Text>
      </VStack>
      <Text fontSize="xs" color="gray.400">{avaliacao.data}</Text>
    </HStack>
  </Box>
)

export const ProdutoAvaliacoes = ({ avaliacoes }: Props) => (
  <Box py={10} borderTop="1px solid" borderColor="gray.100">
    <Text fontSize="lg" fontWeight="700" color="#1a1616" mb={6}>
      Avaliações dos Clientes
    </Text>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
      {avaliacoes.map((avaliacao) => (
        <AvaliacaoCard key={avaliacao.id} avaliacao={avaliacao} />
      ))}
    </SimpleGrid>
  </Box>
)
