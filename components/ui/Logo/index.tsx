interface Props {
  logoUrl: NullableType<string>
  companyName: string
  className?: string
}

export const Logo: React.FC<Props> = ({ logoUrl, companyName, className }) => {
  if (logoUrl) {
    return (
      <div className={`mb-6 md:mb-10 ${className || ""}`}>
        {/* biome-ignore lint/performance/noImgElement: static build, cannot use Image */}
        <img
          src={logoUrl}
          alt={companyName}
          className="max-h-12 w-auto max-w-60"
        />
      </div>
    )
  }
  return (
    <div
      className={`mb-6 flex items-center gap-2 text-black md:mb-10 ${className || ""}`}
    >
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-full border-2 border-current"
      >
        <span className="grid h-5 w-5 place-items-center rounded-full border border-current">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      </span>
      <span className="font-display text-xl uppercase tracking-[0.18em]">
        Archeryline
      </span>
    </div>
  )
}
