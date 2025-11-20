import { Card, CardContent } from '~/components/ui/card'
import { LineShadowText } from '~/components/ui/line-shadow-text'
import { TextAnimate } from '~/components/ui/text-animate'

export default function Desc() {
  return (
    <Card className='h-full'>
      <CardContent className='h-full flex flex-col justify-center gap-2'>
        <LineShadowText className="italic text-xl leading-none font-semibold tracking-tighter text-balance" shadowColor="#5865f2">
          2025 Discord Recap
        </LineShadowText>
        <TextAnimate animation="slideUp" by="word">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo voluptatibus sed maxime corrupti impedit, itaque velit odio debitis tempora quos?
        </TextAnimate>
      </CardContent>
    </Card>
  )
}
