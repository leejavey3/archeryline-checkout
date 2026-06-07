import classNames from "classnames"

import { CheckmarkIcon } from "./CheckmarkIcon"

interface Props {
  status: "edit" | "done" | "skip" | "disabled"
  stepNumber?: number
}

export const Badge: React.FC<Props> = ({ status, stepNumber }) => (
  <div
    data-testid="step-header-badge"
    className={classNames(
      "rounded-full text-contrast flex justify-center items-center w-7 h-7 text-xs font-bold",
      {
        "bg-primary": status === "edit" || status === "done",
        "bg-gray-400/50": status === "disabled" || status === "skip",
      },
    )}
  >
    {status === "done" || status === "skip" ? <CheckmarkIcon /> : stepNumber}
  </div>
)
