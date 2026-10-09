import type { ComponentPropsWithRef } from "react"

import { styles } from "./button.css"

export interface ButtonProps extends ComponentPropsWithRef<"button"> {}

export function Button({ className, ...props }: ButtonProps) {
  return <button {...props} className={[styles, className].filter(Boolean).join(" ")} />
}
