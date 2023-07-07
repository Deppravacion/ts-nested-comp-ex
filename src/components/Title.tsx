import React from "react"

type TitleProps = { text: string }
export const Title: React.FunctionComponent<TitleProps> = ({text}) => {

  return(
    <>
      <h5 className="card-title" >{text}</h5>
    </>
  )
}