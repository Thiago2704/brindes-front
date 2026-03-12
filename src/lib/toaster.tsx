import { createToaster, Toaster as ChakraToaster } from '@chakra-ui/react'
import { Box, Text } from '@chakra-ui/react'

export const toaster = createToaster({
  placement: 'top-end',
  pauseOnPageIdle: true,
})

const toastBg: Record<string, string> = {
  success: '#15803d',
  error:   '#dc2626',
  warning: '#d97706',
  info:    '#2563eb',
}

export const Toaster = () => (
  <ChakraToaster toaster={toaster}>
    {(toast) => (
      <Box
        bg={toastBg[toast.type ?? 'info'] ?? '#1a1616'}
        color="white"
        px={4}
        py={3}
        borderRadius="md"
        boxShadow="lg"
        maxW="sm"
        minW="260px"
      >
        {toast.title && (
          <Text fontWeight="600" fontSize="sm">
            {toast.title as string}
          </Text>
        )}
        {toast.description && (
          <Text fontSize="xs" opacity={0.9} mt={0.5}>
            {toast.description as string}
          </Text>
        )}
      </Box>
    )}
  </ChakraToaster>
)
