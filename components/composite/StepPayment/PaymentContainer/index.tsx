import { PaymentMethodsContainer } from "@commercelayer/react-components"
import { useTranslation } from "react-i18next"

interface Props {
  primaryColor?: string
  children: JSX.Element[] | JSX.Element
}

export const PaymentContainer = ({ primaryColor, children }: Props) => {
  const { t } = useTranslation()

  const checkoutReturnUrl = `${
    window.location.href.split("?")[0]
  }?paymentReturn=true`

  return (
    <PaymentMethodsContainer
      config={{
        checkoutComPayment: {
          success_url: checkoutReturnUrl,
          failure_url: checkoutReturnUrl,
          options: {
            appearance: {
              colorAction: primaryColor,
              colorBorder: "#D8D0C5",
              colorFormBackground: "#fff",
              colorFormBorder: "#D8D0C5",
              colorPrimary: "#1A1A1A",
              colorOutline: "var(--primary-light)",
              label: {
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 400,
              },
              input: {
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
              },
            },
          },
        },
        adyenPayment: {
          styles: {
            card: {
              base: {
                fontFamily: "monospace",
              },
            },
          },
          onDisableStoredPaymentMethod: async ({
            recurringDetailReference,
            shopperReference,
          }) => {
            const res = await fetch("your-server-side-endpoint", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                recurringDetailReference,
                shopperReference,
              }),
            })
            if (res.status === 200) {
              return true
            }
            console.error("Error disabling stored payment method")
            return false
          },
        },
        braintreePayment: {
          styles: {
            // Style all elements
            input: {
              "font-size": "16px",
              "font-family": "monospace",
              padding: "12px",
            },
          },
          containerClassName: "flex flex-col",
          fieldsContainerClassName: "flex flex-col xl:flex-row",
          cardDetailsContainerClassName: "flex justify-between",
          cardContainerClassName: "grow mb-3 xl:mb-0",
          expDateContainerClassName: "flex-none w-2/4 xl:mx-3 xl:w-24",
          cvvContainerClassName: "flex-none w-2/4 pl-3 xl:w-14 xl:pl-0",
          inputWrapperClassName:
            "h-10 border rounded-sm bg-gray-50 transition duration-300 ease-in-out",
          fieldLabelClassName: "text-xs text-gray-400",
        },
        stripePayment: {
          fonts: [
            {
              cssSrc:
                "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
            },
          ],
          appearance: {
            theme: "stripe",
            variables: {
              colorPrimary: primaryColor,
              colorText: "#1A1A1A",
              colorBackground: "#FFFFFF",
              colorDanger: "#CC5156",
              borderRadius: "6px",
              fontFamily: "Inter, sans-serif",
              fontWeightBold: "700",
            },
            rules: {
              ".AccordionItem--selected": {
                fontWeight: "var(--fontWeightBold)",
                color: "#000",
              },
              ".Tab, .Input, .Block, .CheckboxInput, .CodeInput": {
                boxShadow: "none",
                borderColor: "#D8D0C5",
              },
              ".Input": {
                backgroundColor: "#FFFFFF",
              },
              ".Input:focus": {
                backgroundColor: "#fff",
              },
              ".Block": {
                borderColor: "var(--colorPrimary)",
              },
              ".BlockDivider": {
                backgroundColor: "#D8D0C5",
              },
              ".Tab, .Tab:hover, .Tab:focus": {
                border: "0",
              },
              ".Tab--selected, .Tab--selected:hover": {
                backgroundColor: "#1f3d2e",
                color: "#fff",
              },
            },
          },
          options: {
            // style: {
            //   base: {
            //     color: "#000",
            //     fontWeight: "400",
            //     fontSize: "16px",
            //     fontFamily: "Manrope, sans-serif",
            //     ":-webkit-autofill": {
            //       color: "#fce883",
            //     },
            //     "::placeholder": {
            //       color: "#e0e0e0",
            //     },
            //   },
            //   invalid: {
            //     iconColor: "#FFC7EE",
            //     color: "#FFC7EE",
            //   },
            // },
            // hideIcon: false,
            // hidePostalCode: true,
          },
        },
        wireTransfer: {
          infoMessage: {
            text: t("stepPayment.wireTransferDescription"),
            className: "text-sm text-gray-400",
          },
        },
        paypalPayment: {
          cancel_url: checkoutReturnUrl,
          return_url: checkoutReturnUrl,
          infoMessage: {
            text: t("stepPayment.paypalDescription"),
            className: "text-sm text-gray-400",
          },
        },
        externalPayment: {
          payment_source_token: "testToken12334554",
          customComponent: () => {
            return <div>This is an external payment</div>
          },
        },
      }}
    >
      {children}
    </PaymentMethodsContainer>
  )
}
