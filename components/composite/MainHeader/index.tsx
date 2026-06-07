import TotalAmount from "@commercelayer/react-components/orders/TotalAmount"
import useDeviceDetect from "components/hooks/useDeviceDetect"
import type { FC } from "react"
import { useTranslation } from "react-i18next"
import { ExpireTimer } from "../OrderSummary/ExpireTimer"

interface Props {
  orderNumber: string
  expiresAt: NullableType<string>
  isFinished: () => void
  expirationInfo: NullableType<ExpirationInfo>
}

export const MainHeader: FC<Props> = ({
  orderNumber,
  expiresAt,
  isFinished,
  expirationInfo,
}) => {
  const { t } = useTranslation()
  const { isMobile } = useDeviceDetect()
  return (
    <>
      <div className="-mx-5 mb-5 flex flex-row justify-between border-t border-gray-200 px-5 pt-5 pb-3 md:-mx-0 md:mb-0 md:items-center md:border-t-0 md:border-b md:pt-0 md:px-0">
        {/* Recap */}
        <div className="flex flex-col flex-1 justify-between md:items-center md:flex-row">
          <h1 className="font-display text-2xl uppercase tracking-tight text-black md:text-4xl">
            {t("general.checkoutTitle")}
          </h1>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500 md:text-sm">
            #{orderNumber}
          </p>
        </div>
        {/* Total */}
        <div className="font-bold text-xl md:hidden">
          <TotalAmount />
        </div>
      </div>
      {expiresAt != null && isMobile && (
        <ExpireTimer
          expiresAt={expiresAt}
          isFinished={isFinished}
          expirationInfo={expirationInfo}
        />
      )}
    </>
  )
}
