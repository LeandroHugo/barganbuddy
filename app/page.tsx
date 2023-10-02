import HeroCarousel from '@/components/HeroCarousel';
import Searchbar from '@/components/Searchbar';
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex md:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Your Budget-Friendly Shopping Companion:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={26}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Unlock Savings with
              <span className="text-primary-orange"> BargainBuddy</span>
            </h1>

            <p className="mt-6">
              Your analytics powerhouse. More conversions, deeper engagements, lasting loyalty.
            </p>

              <Searchbar />
            </div>

            <HeroCarousel />
            </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text"></h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {['Apple IPhone 15','Booklet', 'Sneakers'].map
          ((product) => (
            <div>{product}</div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home;