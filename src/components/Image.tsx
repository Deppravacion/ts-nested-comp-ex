import React from "react"
type ImgProps = {
  src: string;
}
export const Image: React.FunctionComponent<ImgProps> = ({src}) => {
  return(
    <>
      <img src={src} className="card-img-top" alt='use your imagination' />
    </>
  )
}