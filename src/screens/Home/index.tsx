import React, { FC } from 'react';

import { HeroSlider, Popular } from "@/components";

import { useAppSelector } from '@/store/hooks';

import './styles.scss';

const Home: FC = () => {
     const items = useAppSelector(state => state.movies.data.series);

     return (
          <div className="home-page">
               <div className="page-container">
                    <HeroSlider classname={'home-page__slider'} item={items[0]}/>
                    <Popular items={items.slice(1)} classname="home-page__popular" />
               </div>
          </div>
     );
};

export default Home;
