"use client"

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const heroImages = [
    { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch' },
    { imgUrl: '/assets/images/hero-2.svg', alt: 'bag' },
    { imgUrl: '/assets/images/hero-3.svg', alt: 'lamp' },
    { imgUrl: '/assets/images/hero-4.svg', alt: 'air-fryer' },
    { imgUrl: '/assets/images/hero-5.svg', alt: 'chair' },
];

const HeroCarousel = () => {
    return (
        <div className="hero-carousel">
            <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
        >
                {heroImages.map((image) => (
                    <div key={image.alt}>
                        <img
                            src={image.imgUrl}
                            alt={image.alt}
                            width={484}
                            height={484}
                            className="object-contain"
                            key={image.alt}
                        />
                    </div>
                ))}
            </Carousel>

            <Image
                src="/assets/icons/hand-drawn-arrow.svg"
                alt="arrow"
                width={175}
                height={175}
                className="max-x1:hidden absolute -left1-[15%] bottom-0z-0"
        />
        </div>
    );
};

export default HeroCarousel;