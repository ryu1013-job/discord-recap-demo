import Rank from './_rank'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'

export default function Friends() {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>
          Top 3 Friends
        </CardTitle>
      </CardHeader>
      <CardContent className='flex justify-around items-center h-full pb-8'>
        <Rank rank={2} imageUrl="/naruse.jpeg" className='mt-8' />
        <Rank rank={1} imageUrl="/koryu.jpeg" />
        <Rank rank={3} imageUrl="/naoki.png" className='mt-8' />
      </CardContent>
    </Card>
  )
}
