import React from "react";
import { Title } from "./Title";
import { Description } from "./Description";
import { Image } from "./Image";

export type CardType = { [key: string]: string; }
export type CardCompProp = {item: CardType }

export const Card: React.FunctionComponent<CardCompProp> = ({item}) => {

  return (
    <div className="card" >
      <Image src={item.image} />
      <div className="card-body">
        <Title text={item.title} />
        <Description text={item.description} />
      </div>
    </div>
  )
}

