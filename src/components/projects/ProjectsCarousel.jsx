import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GitHub, OpenInNew } from '@mui/icons-material';
import AOS from 'aos';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProjectsCarousel.sass';

import { Autoplay, EffectCreative, Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { projects } from './projectsData';

export default function ProjectsCarousel() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <Swiper
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          shadow: true,
          translate: ['100%', 0, 0],
        },
      }}
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      spaceBetween={30}
      grabCursor={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, EffectCreative, Navigation, Pagination]}
      autoplay={{
        delay: 10000,
        disableOnInteraction: true,
      }}
      loop={true}
      className="mySwiper"
    >
      {projects.map(({ title, description, gitHubUrl, deployedUrl, imgSrc }) => {
        return (
          <SwiperSlide key={title} className="swiper-slide">
            <img src={imgSrc} alt={title} className="carousel__img" />
            <div className="swiper-slide-text-content" data-aos="fade-left">
              <h4 className="project__title">{t(title)}</h4>
              <p className="project__description">{t(description)}</p>
              <div className="project__nav">
                <a href={gitHubUrl} target="_blank" rel="noreferrer">
                  <GitHub fontSize="inherit" />
                </a>
                {deployedUrl ? (
                  <a href={deployedUrl} target="_blank" rel="noreferrer">
                    <OpenInNew fontSize="inherit" />
                  </a>
                ) : (
                  ''
                )}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
