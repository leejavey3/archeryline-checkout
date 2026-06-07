export const Base = ({
  children,
}: {
  children?: JSX.Element[] | JSX.Element
}) => (
  <div className="bg-gray-50 min-h-screen w-auto text-black">{children}</div>
)
