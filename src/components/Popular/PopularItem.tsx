import { FC } from 'react';

import { Button } from '@/components';

import { ReactComponent as HalfStar } from '@/assets/icons/half-star.svg';
import { ReactComponent as Star } from '@/assets/icons/star.svg';

import { IPopularItem } from './type';

const PopularItem: FC<IPopularItem> = item => {
     let rating = Math.floor(item.rating),
          isHalfStar = item.rating - rating;

     return (
          <div className="popular-item">
               <div className="popular-item__img">
                    <img
                         src={require(`../../assets/images/${item.img}`)}
                         alt={item.title}
                    />
               </div>
               <div className="popular-item__header">
                    <span className="popular-item__title">{item.title}</span>
                    {item.rating && (
                         <div className="popular-item__rating">
                              {new Array(rating).fill(rating).map(_ => {
                                   return <Star />;
                              })}
                              {!!isHalfStar && <HalfStar />}
                         </div>
                    )}
               </div>
               <div className="popular-item__footer">
                    <div className="popular-item__info">
                        {
                            !!item.episodes && <span>{item.episodes} Ep</span>
                        }
                         <span>{item.genre}</span>
                    </div>
                    <div className="popular-item__actions">
                         <Button size="drop" color="filter" />
                         <Button size="small" color="primary" text="Watch" />
                    </div>
               </div>
          </div>
     );
};

export default PopularItem;
