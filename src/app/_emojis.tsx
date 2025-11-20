import Rank from './_rank'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'

export default function Emojis() {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>
          Top 3 Emojis
        </CardTitle>
      </CardHeader>
      <CardContent className='flex justify-around items-center h-full pb-8'>
        <Rank rank={2} imageUrl="/peka.gif" rounded="md" className='mt-8' />
        <Rank rank={1} imageUrl="/shinpu.png" rounded='md' />
        <Rank rank={3} imageUrl="/kiai.png" rounded="md" className='mt-8' />
      </CardContent>
    </Card>
  )
}
