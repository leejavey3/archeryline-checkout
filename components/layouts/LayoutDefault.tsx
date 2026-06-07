import { Base } from "components/ui/Base"
import { Card } from "components/ui/Card"
import { Container } from "components/ui/Container"
import type { FC } from "react"

interface Props {
  aside: React.ReactNode
  main: React.ReactNode
}

export const LayoutDefault: FC<Props> = ({ main, aside }) => {
  return (
    <Base>
      <Container>
        <div className="flex flex-col min-h-screen border-x border-gray-200 bg-white md:flex-row">
          <div className="flex-none bg-gray-50 md:flex-1 md:border-r md:border-gray-200">
            {aside}
          </div>
          <div className="flex-none order-first bg-white md:order-last md:flex-1">
            <Card fullHeight>{main}</Card>
          </div>
        </div>
      </Container>
    </Base>
  )
}
