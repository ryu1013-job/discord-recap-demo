import React from 'react'
import { Card, CardContent } from '~/components/ui/card'
import { NumberTicker } from '~/components/ui/number-ticker'

export default function Counter() {
  return (
    <Card className='h-full'>
      <CardContent className='flex flex-col items-center justify-center h-full gap-4'>
        <p>Total Messages</p>
        <NumberTicker value={1250} className="text-8xl font-bold" />
      </CardContent>
    </Card>
  )
}