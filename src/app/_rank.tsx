import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'

type RankProps = {
  rank: 1 | 2 | 3
  imageUrl: string
  fallback?: string
  className?: string
  rounded?: 'md' | 'full'
}

const rankStyles = {
  1: { border: 'border-amber-300', badge: 'bg-amber-300' },
  2: { border: 'border-gray-300', badge: 'bg-gray-300' },
  3: { border: 'border-orange-400', badge: 'bg-orange-400' },
} as const

export default function Rank({ rank, imageUrl, fallback = 'CN', className, rounded = 'full' }: RankProps) {
  const styles = rankStyles[rank]
  const roundedClass = rounded === 'full' ? 'rounded-full' : 'rounded-md'
  
  return (
    <div className={`relative w-fit ${styles.border} ${roundedClass} border-3 ${className || ''}`}>
      <div className={`absolute -top-3 right-1/2 translate-x-1/2 z-20 ${styles.badge} size-6 rounded-full flex items-center justify-center text-background`}>{rank}</div>

      <Avatar className={`size-20 ${roundedClass}`}>
        <AvatarImage src={imageUrl} alt="user" />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>

    </div>
  )
}
