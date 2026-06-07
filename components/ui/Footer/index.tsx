export const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper fixed bottom-0 z-30 -mx-5 w-full border-t border-gray-200 bg-gray-50 px-5 py-3 text-xs text-gray-500 md:sticky md:bottom-0 md:m-0 md:mt-20 md:flex md:items-center md:justify-between md:p-0 md:py-4">
      <div className="font-semibold uppercase tracking-[0.14em] text-black">
        Secure Archeryline checkout
      </div>
      <p className="mt-1 text-[11px] leading-relaxed md:mt-0">
        Pricing in AUD. Payment processing is handled by certified providers.
      </p>
    </div>
  )
}
