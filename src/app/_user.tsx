import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Card, CardContent } from '~/components/ui/card'

export default function User() {
  return (
    <Card className='h-full'>
      <CardContent className='h-full flex items-center gap-6'>
        <div className="relative">
          <Avatar className='size-16'>
            <AvatarImage src="/icon.svg" alt="ryu" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className='size-6 rounded-sm absolute -bottom-1 -right-1'>
            <AvatarImage src="/intech.png" alt="intech" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <p className='text-2xl'>ryu</p>
      </CardContent>
    </Card>
  )
}
