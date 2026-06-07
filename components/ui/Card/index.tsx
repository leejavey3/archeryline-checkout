import classNames from "classnames"
import type { FC, ReactNode } from "react"

interface Props {
  className?: string
  rounded?: boolean
  fullHeight?: boolean
  children?: ReactNode
}

export const Card: FC<Props> = ({
  children,
  className,
  rounded,
  fullHeight,
}) => (
  <div
    className={classNames(
      "bg-white p-5 shadow-none md:px-8 lg:px-12 lg:pt-10 xl:px-20 xl:pt-12",
      {
        "rounded-lg border border-gray-200": rounded,
        "min-h-full": fullHeight,
      },
      className,
    )}
  >
    {children}
  </div>
)
