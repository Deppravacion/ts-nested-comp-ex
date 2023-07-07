import React from "react"
type DescProps = { text: string }

export const Description: React.FunctionComponent<DescProps> = ({text}) => {

  return(
    <>
      <p className="card-text" >{text}</p>
    </>
  )
}