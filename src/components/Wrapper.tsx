import React from "react";
import { CardTypeArray, PropsType } from "../App";
import { data } from './constants';

export const Wrapper: React.FunctionComponent<PropsType> = (props) => {

  const cardData: CardTypeArray = Array.from(props.data)
  console.log(cardData);
  
  return(
    <>
      {/* holds all the cards */}
    </>
  )
}

export default Wrapper