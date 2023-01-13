import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { Button } from '@/components';

import { IHeroSliderProps } from './type';

import './styles.scss';

const HeroSlider: FC<IHeroSliderProps> = ({ classname, item }) => {
     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          dotsClass: 'hero-slider-dots',
          className: `hero-slider ${classname}`,
     };

     return (
          <Slider {...settings}>
               {Array(3)
                    .fill(3)
                    .map(_ => {
                         return (
                              <div className="hero-slider__item hero-slider-item">
                                   <h2 className="hero-slider-item__title">
                                        {item.title}
                                   </h2>
                                   <div className="hero-slider-item__img">
                                        <img
                                             src={require(`../../assets/images/${item.img}`)}
                                             alt={item.title}
                                        />
                                   </div>
                                   <div className="hero-slider-item__actions">
                                        <Button
                                             size={'large'}
                                             color={'primary'}
                                             text={'Watch Now'}
                                        />
                                   </div>
                              </div>
                         );
                    })}
          </Slider>
     );
};

export default HeroSlider;
