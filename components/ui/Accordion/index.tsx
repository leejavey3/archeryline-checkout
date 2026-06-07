import classNames from "classnames"
import { AccordionContext } from "components/data/AccordionProvider"
import { AppContext } from "components/data/AppProvider"
import { type FC, type ReactNode, useContext } from "react"

interface AccordionProps {
  children?: ReactNode
}

interface AccordionItemProps {
  index: number
  header: ReactNode
  children?: JSX.Element[] | JSX.Element
}

export const Accordion: FC<AccordionProps> = ({ children }) => {
  return <div className="-mx-5 md:-mx-0">{children}</div>
}

export const AccordionItem: FC<AccordionItemProps> = ({
  children,
  index,
  header,
}) => {
  const ctx = useContext(AccordionContext)
  const appCtx = useContext(AppContext)

  if (!ctx || !appCtx) return null

  const handleSelection = () => {
    return ctx.isActive ? ctx.closeStep() : ctx.setStep()
  }

  return (
    <div
      tabIndex={index}
      className={classNames(
        "accordion-tab mb-2 border-b border-gray-200 bg-white px-5 shadow-none md:mb-0 md:px-0",
        {
          active: ctx.isActive,
          disabled: ctx.status === "disabled" || ctx.status === "skip",
        },
      )}
    >
      <button
        type="button"
        data-testid={`accordion_${ctx.step.toLocaleLowerCase()}`}
        className="accordion-header relative flex w-full cursor-pointer items-start justify-between pb-3 pt-5 text-black transition-all duration-100 ease-in-out focus:outline-hidden md:pt-6 md:pb-1"
        onClick={handleSelection}
      >
        <div className="transition-all ease-in-out duration-100">{header}</div>
        <div className="accordion-icon transform transition-all ease-in-out duration-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <title>Accordion icon</title>
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
      <div className="accordion-body">{children}</div>
    </div>
  )
}
