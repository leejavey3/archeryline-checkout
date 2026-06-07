interface Props {
  className?: string
  rounded?: boolean
  children?: ChildrenType
}

export const CardAddress: React.FC<Props> = ({ className, children }) => (
  <div
    className={`rounded-md border border-gray-200 bg-white p-5 pb-10 shadow-none ${className || ""}`}
  >
    {children}
  </div>
)
