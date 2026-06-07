import type { FC } from "react"

export const Wrapper: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} />
)

export const SummaryHeader: FC<React.HTMLAttributes<HTMLDivElement>> = (
  props,
) => <div {...props} className="mb-8 border-b border-gray-200 pb-6" />

export const SummaryTitle: FC<React.HTMLAttributes<HTMLHeadingElement>> = (
  props,
) => (
  <h2
    {...props}
    className="font-display text-2xl uppercase tracking-tight text-black"
  />
)

export const SummarySubTitle: FC<React.HTMLAttributes<HTMLParagraphElement>> = (
  props,
) => <p {...props} className="mt-1 text-sm text-gray-500" />

export const TotalWrapper: FC<React.HTMLAttributes<HTMLDivElement>> = (
  props,
) => <div {...props} className="flex flex-row" />

export const AmountWrapper: FC<React.HTMLAttributes<HTMLDivElement>> = (
  props,
) => <div {...props} className="flex flex-col flex-1 pb-32 md:pb-0 lg:pl-8" />

export const AmountSpacer: FC<React.HTMLAttributes<HTMLDivElement>> = (
  props,
) => <div {...props} className="hidden lg:flex lg:w-[85px]" />

export const RecapLine: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div
    {...props}
    className={`flex flex-row justify-between py-1.5 text-sm text-black ${!props.children ? "hidden" : ""}`}
  />
)

export const RecapLineItem: FC<React.HTMLAttributes<HTMLParagraphElement>> = (
  props,
) => <p {...props} className="font-semibold" />

export const RecapLineTotal: FC<React.HTMLAttributes<HTMLDivElement>> = (
  props,
) => (
  <div
    {...props}
    className={`mt-7 flex flex-row justify-between border-t border-gray-200 pt-6 text-black ${!props.children ? "hidden" : ""}`}
  />
)

export const RecapLineItemTotal: FC<
  React.HTMLAttributes<HTMLParagraphElement>
> = (props) => (
  <p {...props} className="text-xl font-semibold invisible lg:visible" />
)
