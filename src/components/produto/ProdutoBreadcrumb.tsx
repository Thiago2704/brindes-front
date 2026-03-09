import { Box, Container, HStack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

type Props = {
  nomeProduto: string
}

export const ProdutoBreadcrumb = ({ nomeProduto }: Props) => {
  const navigate = useNavigate()

  return (
    <Box borderBottom="1px solid" borderColor="gray.100" bg="white">
      <Container maxW="7xl">
        {/* Trilha de navegação */}
        <HStack gap={1} py={3} fontSize="xs" color="gray.500">
          <Text cursor="pointer" _hover={{ color: '#1a1616' }} onClick={() => navigate('/')}>
            Início
          </Text>
          <Text>/</Text>
          <Text color="#1a1616" fontWeight="500">{nomeProduto}</Text>
        </HStack>

        {/* Botão voltar */}
        <HStack
          gap={1}
          pb={3}
          cursor="pointer"
          w="fit-content"
          color="gray.600"
          fontSize="sm"
          _hover={{ color: '#1a1616' }}
          onClick={() => navigate(-1)}
        >
          <Text fontSize="md" lineHeight={1}>‹</Text>
          <Text fontWeight="500">Voltar para produtos</Text>
        </HStack>
      </Container>
    </Box>
  )
}
