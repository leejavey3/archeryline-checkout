export const InputCss = [
  // Base styles
  "block w-full rounded-md border border-gray-200 bg-white p-3 text-sm text-black shadow-none placeholder:text-gray-500",
  "transition duration-100 ease-in-out",
  "focus:border-primary focus:ring-2 focus:ring-offset-0 focus:ring-primary-light/50",
  "sm:text-sm",
  // Autofill styles
  "[&:-webkit-autofill]:shadow-inner",
  "[&:-webkit-autofill]:transition-bg [&:-webkit-autofill]:duration-[5000s] [&:-webkit-autofill]:ease-in-out [&:-webkit-autofill]:delay-[0ms]",
  "[&:-webkit-autofill:focus]:shadow-inner",
  "[&:-webkit-autofill:focus]:transition-bg [&:-webkit-autofill:focus]:duration-[5000s] [&:-webkit-autofill:focus]:ease-in-out [&:-webkit-autofill:focus]:delay-[0ms]",
].join(" ")
