import React, { FC } from 'react';

import { HeroSlider, Popular } from "@/components";

import { useAppSelector } from '@/store/hooks';

import './styles.scss';

const Movies: FC = () => {
     const items = useAppSelector(state => state.movies.data.movies);

     return (
          <div className="movies-page">
               <div className="page-container">
                    <HeroSlider classname={'movies-page__slider'} item={items[0]}/>
                    <Popular items={items.slice(1)} classname="movies-page__popular" />
               </div>
          </div>
     );
};

export default Movies;
