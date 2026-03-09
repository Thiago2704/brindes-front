import { Box, Button, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { HOME_PRODUTOS, type HomeProduto } from './homeData'

type ProdutoCardProps = HomeProduto

const ProdutoCard = ({ id, nome, preco, minimo, img }: ProdutoCardProps) => {
  const navigate = useNavigate()
  return (
  <Box
    bg="white"
    borderRadius="md"
    overflow="hidden"
    border="1px solid"
    borderColor="gray.100"
    boxShadow="sm"
    _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }}
    transition="all 0.2s"
  >
    <Box h="180px" overflow="hidden">
      <img
        src={img}
        alt={nome}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
    <Box p={4}>
      <Text fontWeight="600" fontSize="sm" color="#1a1616" mb={1}>
        {nome}
      </Text>
      <Text fontWeight="700" fontSize="lg" color="#1a1616" mb={1}>
        {preco}
      </Text>
      <Text fontSize="xs" color="gray.500" mb={4}>
        Pedido mínimo: {minimo}
      </Text>
      <Button
        w="full"
        bg="#000000"
        color="white"
        fontSize="xs"
        fontWeight="600"
        py={2}
        borderRadius="sm"
        _hover={{ bg: '#222' }}
        onClick={() => navigate(`/produto/${id}`)}
      >
        🛒&nbsp; Solicitar Orçamento
      </Button>
    </Box>
  </Box>
  )
}

export const HomeProdutosDestaque = () => (
  <Box bg="gray.50" py={14}>
    <Container maxW="7xl">
      <VStack gap={2} mb={10}>
        <Heading as="h2" fontSize="2xl" fontWeight="700" color="#1a1616" textAlign="center">
          Produtos em Destaque
        </Heading>
        <Text fontSize="sm" color="gray.500" textAlign="center" maxW="400px">
          Explore nossa seleção de produtos personalizados premium para fortalecer a identidade
          da sua marca.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={5} mb={8}>
        {HOME_PRODUTOS.map((produto) => (
          <ProdutoCard key={produto.id} {...produto} />
        ))}
      </SimpleGrid>

      <Box textAlign="center">
        <Button
          variant="outline"
          borderColor="#1a1616"
          color="#1a1616"
          fontWeight="600"
          fontSize="sm"
          px={8}
          borderRadius="sm"
          _hover={{ bg: '#1a1616', color: 'white' }}
        >
          Ver Todos os Produtos
        </Button>
      </Box>
    </Container>
  </Box>
)
