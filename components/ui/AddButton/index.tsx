import { useTranslation } from "react-i18next"

interface Props {
  dataTestId: string
  action: () => void
}

export const AddButton: React.FC<Props> = ({ dataTestId, action }) => {
  const { t } = useTranslation()

  return (
    //biome-ignore lint/a11y/noStaticElementInteractions: This is a button-like elements
    <div
      data-testid={dataTestId}
      className="flex w-full cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-2 py-3 text-center text-gray-500 transition duration-200 ease-in hover:border-primary hover:text-primary"
      onClick={action}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <title>Add button</title>
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
          clipRule="evenodd"
        />
      </svg>
      <p className="pl-1 text-xs font-bold uppercase tracking-[0.12em]">
        {t("stepCustomer.addNewAddress")}
      </p>
    </div>
  )
}
