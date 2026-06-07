import type React from "react"
import { useEffect } from "react"

interface GlobalStyleProps {
  primaryColor: NullableType<HSLProps>
}

const GlobalStylesProvider: React.FC<GlobalStyleProps> = ({ primaryColor }) => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_USE_COMMERCE_LAYER_THEME !== "true") {
      return
    }

    const root = document.documentElement
    if (primaryColor) {
      root.style.setProperty("--primary-h", `${primaryColor.h}`)
      root.style.setProperty("--primary-s", `${primaryColor.s}`)
      root.style.setProperty("--primary-l", `${primaryColor.l}`)
    }
  }, [primaryColor])

  return null
}

export default GlobalStylesProvider
