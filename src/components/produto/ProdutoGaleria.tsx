import { useState } from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'

type Props = {
  imagens: string[]
  nomeProduto: string
}

export const ProdutoGaleria = ({ imagens, nomeProduto }: Props) => {
  const [imagemPrincipal, setImagemPrincipal] = useState(imagens[0])
  const thumbnails = imagens.slice(1)

  return (
    <Grid templateColumns="1fr auto" gap={3} alignItems="stretch">
      {/* Imagem principal */}
      <GridItem>
        <Box
          borderRadius="md"
          overflow="hidden"
          border="1px solid"
          borderColor="gray.100"
          h={{ base: '320px', md: '500px' }}
        >
          <img
            src={imagemPrincipal}
            alt={nomeProduto}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </GridItem>

      {/* Miniaturas */}
      <GridItem>
        <Box display="flex" flexDirection="column" gap={3} h="full">
          {thumbnails.map((thumb, i) => (
            <Box
              key={i}
              w={{ base: '72px', md: '132px' }}
              h={{ base: '72px', md: '116px' }}
              borderRadius="md"
              overflow="hidden"
              border="2px solid"
              borderColor={imagemPrincipal === thumb ? '#1a1616' : 'gray.100'}
              cursor="pointer"
              flexShrink={0}
              _hover={{ borderColor: '#1a1616' }}
              transition="border-color 0.15s"
              onClick={() => setImagemPrincipal(thumb)}
            >
              <img
                src={thumb}
                alt={`${nomeProduto} — imagem ${i + 2}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Box>
      </GridItem>
    </Grid>
  )
}
