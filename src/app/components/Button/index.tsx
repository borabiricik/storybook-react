import React from "react"
import classNames from "classnames"

type Props = {} & React.ComponentProps<"button">

const Button = ({ children, className = "", ...props }: Props) => {
  return (
    <button
      className={classNames(
        "px-4 py-2",
        "border border-red-400 border-solid rounded-lg",
        "bg-transparent outline-none shadow-none"
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
