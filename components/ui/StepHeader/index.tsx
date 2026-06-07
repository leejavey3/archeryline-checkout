import { Badge } from "../Badge"

interface Props {
  status: "edit" | "done" | "disabled" | "skip"
  label: string
  info: string | Element | JSX.Element
  stepNumber?: number
  onEditRequest?: () => void
}

export const StepHeader: React.FC<Props> = ({
  status,
  label,
  info,
  stepNumber,
}) => {
  return (
    <div className="mb-2 flex items-start md:mb-5 md:pl-0">
      <div>
        <div className="mb-1 flex items-center">
          <Badge status={status} stepNumber={stepNumber} />
          <h2
            className="pl-3 text-base font-extrabold uppercase leading-none tracking-[0.12em] text-black md:text-lg"
            data-testid="step-header-customer"
          >
            {label}
          </h2>
        </div>
        <div
          className="pl-10 text-sm leading-relaxed text-gray-500"
          data-testid="step-header-info"
        >
          <>{info}</>
        </div>
      </div>
    </div>
  )
}
