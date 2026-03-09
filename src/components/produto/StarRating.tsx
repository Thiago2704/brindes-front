import { HStack } from '@chakra-ui/react'

type Props = {
  value: number   // ex: 4.5
  size?: number
}

const StarIcon = ({ filled, half, size }: { filled: boolean; half: boolean; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Estrela vazia (sempre) */}
    <polygon
      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
      fill="#e2e8f0"
      stroke="#e2e8f0"
      strokeWidth="1"
    />
    {/* Preenchimento: cheio ou metade */}
    {(filled || half) && (
      <clipPath id={`clip-half-${filled}`}>
        <rect x="0" y="0" width={half && !filled ? '50%' : '100%'} height="100%" />
      </clipPath>
    )}
    {(filled || half) && (
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill="#F59E0B"
        stroke="#F59E0B"
        strokeWidth="1"
        clipPath={half && !filled ? `url(#clip-half-${filled})` : undefined}
      />
    )}
  </svg>
)

export const StarRating = ({ value, size = 16 }: Props) => {
  const stars = [1, 2, 3, 4, 5].map((star) => ({
    filled: value >= star,
    half: value >= star - 0.5 && value < star,
  }))

  return (
    <HStack gap={0.5}>
      {stars.map((s, i) => (
        <StarIcon key={i} filled={s.filled} half={s.half} size={size} />
      ))}
    </HStack>
  )
}
