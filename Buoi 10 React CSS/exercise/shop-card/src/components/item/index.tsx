import React from 'react';
import s from './item.module.scss';

type ItemCard = {
  thumbUrl: string;
  title: string;
  price: number;
  currency: string;
  soldItems: number;
  discount: string;
}

type ItemCardProps = {
  item: ItemCard
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {


  return <div className={s.card}>
    <div className={s.discount}>{item.discount}</div>
    <figure className={s.image}>
      <img src={item.thumbUrl} />
    </figure>

    <div className={s.content}>
      <h3 className={s.title}>
        {item.title}
      </h3>
      <div className={s.dummyHeight} />
      <div className={s.bottom}>
        <div className={s.price}>{item.currency}{item.price}</div>
        <div className={s.itemSold}>{item.soldItems} sold</div>
      </div>
    </div>
  </div>
}