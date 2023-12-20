import React, { ComponentProps, PropsWithChildren } from "react"
import { linkTo } from "@storybook/addon-links"
import classNames from "classnames"

type Props = { link: string } & ComponentProps<"button">

const Link = ({ children, link, ...props }: Props) => {
  return (
    <button
      className={classNames(
        "font-semibold w-fit border-2 border-gray-200 px-4 py-2",
        "rounded-lg",
        "hover:bg-gray-200 transition-all hover:shadow-md "
      )}
      onClick={linkTo(`app/components/${link}`)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Link
