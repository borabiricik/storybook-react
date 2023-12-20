import React, { ComponentProps, PropsWithChildren } from "react"

type Props = {} & ComponentProps<"p">

const Label = ({ children }: Props) => {
  return <p className="text-lg text-red-400">{children}</p>
}

export default Label
