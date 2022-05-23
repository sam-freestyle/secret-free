
//import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useEffect } from 'react';
import ArrowDown from "../components/arrow";
import Button from "../components/button";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Home() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.utils.toArray('section').forEach((section, i) => {
        
        var colorAttr = section.classList.contains('sectionLight') ? 'light' : 'dark';
        
        gsap.to("#__next", {
          backgroundColor: colorAttr === "dark" ? gsap.getProperty("html", "--dark") : gsap.getProperty("html", "--light"),
          color: colorAttr === "dark" ? gsap.getProperty("html", "--light") : gsap.getProperty("html", "--dark"),
          immediateRender: false,
          scrollTrigger: {
            trigger: section,
            scrub: true,
            start:'top bottom',
            end: '+=100%',
            markers: {startColor: "green", endColor: "red", fontSize: "12px"},
          }
        });

    });
  }, [])

  
  
  return (
    <>    

      {/*  Banner  */}
      <section className="sectionDark w-100 h-screen flex justify-center items-center mt-0">
        <div className="container relative w-100 h-screen mx-auto flex flex-col justify-center flex-wrap">

          <div className="w-100">
            <h1 className="font-semibold text-9xl leading-none">
              Take your crown. <br></br>Then keep it.
            </h1>
          </div>

          <div className="w-1/3 flex flex-col self-end mt-20">
            <p className="font-normal text-2xl leading-normal">A digital transformation agency that gets you to the top and helps you defend your throne</p>

            <Button dark className="mt-5" link="https://instagram.com/freestyleint" >
                Our work
            </Button>
          </div>

        </div>
      </section>

      {/*  Intro  */}
      <section className="intro sectionLight w-100 h-screen flex flex-col justify-center">
        <div className="container relative w-100 h-screen mx-auto flex flex-col justify-center flex-wrap">

          <div className="w-2/3">
            <h2 className="font-semibold text-5xl leading-normal">Reaching the top is one thing. Staying there is another entirely.</h2>
          </div>

          <div className="w-2/3 self-end mt-40">
            <p className="font-normal text-3xl leading-normal">But digital solutions designed with both your business and customers in mind? That there - is your shot at defending the throne.</p>
          </div>

          <ArrowDown className="bottom-7" dark />

        </div>
      </section>

      {/*  Case Study Carousel  */}
      <section className="sectionDark relative w-100 h-screen flex flex-col justify-center">

        <figure className="caseImg overlay absolute left-0 top-0 h-full w-full">
          <Image 
            src="/img/casestudy-main-colour-camc.jpg"
            alt="Caravan and Motorhome Club working with Freestyle"
            layout="fill"        
          /> 
        </figure>

        <div className="container relative z-20 w-full h-screen mx-auto flex flex-col justify-center flex-wrap">
          <div className="w-full flex flex-col">
            <h2 className="font-semibold text-7xl leading-snug">A roadmap to industry-leading digital journeys for members</h2>

            <Button dark className="mt-10" link="#" >
                Read more
            </Button>
          </div>
        </div>

        <div className="slideIndicator absolute z-20 w-full left-0 bottom-44">
          <div className="container relative w-full mx-auto flex flex-col justify-center flex-wrap">
            <span className="currentSlide absolute w-1/3 left-0 bottom-0"></span>
          </div>
        </div>

      </section>

      {/*  Problem Setting  */}
      <section className="sectionLight w-100 h-screen flex flex-col justify-center">
        <div className="container relative w-100 h-screen mx-auto flex flex-col justify-center flex-wrap">

          <div className="w-2/3">
            <h2 className="font-semibold text-5xl leading-normal">Rushing headfirst to build digital products often ends in disaster.</h2>
          </div>

          <div className="w-2/3 self-end mt-20">
            <p className="font-normal text-3xl leading-normal">You get solutions that don't actually solve your problem. That are easy for customers to buy, difficult for sales teams to fulfil. That provide a great experience but neglect your bottom-line.</p>
            <h4 className="text-grey font-semibold text-3xl mt-20">Products that are built for today, not for tomorrow.</h4>
          </div>

          <ArrowDown className="bottom-7" dark />

        </div>
      </section>

      {/*  Strategy-first solutions  */}
      <section className="sectionLight w-100 h-screen flex flex-col justify-center">
        <div className="container relative w-100 h-screen mx-auto flex flex-col justify-center flex-wrap">

          <div className="w-2/3">
            <h2 className="font-semibold text-7xl leading-tight"><span className="text-grey">Stay relevant with</span> strategy-first tech solutions.</h2>
          </div>

          <div className="w-2/3 self-end mt-20">
            <p className="font-normal text-3xl leading-normal">A process that takes your wider business context into account at every step. Planning ahead to design digital solutions for the future, not just for today.</p>
          </div>

          <ArrowDown className="bottom-7" dark />

        </div>
      </section>

      {/*  Service 1 - strategy  */}
      <section className="sectionLight relative w-100 h-screen flex flex-col justify-center">

        <figure className="serviceImg absolute left-0 z-3 h-screen w-3/5">
          <Image 
            src="/img/service-strategy.jpg"
            alt="Business and technology strategy"
            layout="fill"        
          /> 
        </figure>

        <div className="container relative w-100 h-screen mx-auto flex flex-row items-center justify-end flex-nowrap">

          <span className="bigNumber absolute right-4 top-10 font-semibold text-lightgrey">01</span>

          <div className="w-1/3 self-center">
            <h2 className="font-semibold text-5xl leading-tight">Digital product &amp; service design</h2>
            <p className="font-normal text-xl leading-normal mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, sollicitudin duis sodales mattis. Ut aliquam sit in amet.</p>
          </div>

          <ArrowDown className="bottom-7 left-2/3" dark />

        </div>
      </section>

      {/*  Service 2 - product design  */}
      <section className="sectionLight relative w-100 h-screen flex flex-col justify-center">

        <figure className="serviceImg absolute left-0 z-3 h-screen w-3/5">
          <Image 
            src="/img/service-productdesign.jpg"
            alt="Digital product and service design"
            layout="fill"        
          />
        </figure>

        <div className="container relative w-100 h-screen mx-auto flex flex-row items-center justify-end flex-nowrap">

          <span className="bigNumber absolute right-4 top-10 font-semibold text-lightgrey">02</span>

          <div className="w-1/3 self-center">
            <h2 className="font-semibold text-5xl leading-tight">Business &amp; technology strategy</h2>
            <p className="font-normal text-xl leading-normal mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, sollicitudin duis sodales mattis. Ut aliquam sit in amet.</p>
          </div>

          <ArrowDown className="bottom-7 left-2/3" dark />

        </div>
      </section>

      {/*  Service 3 - customer experience  */}
      <section className="sectionLight relative w-100 h-screen flex flex-col justify-center">

        <figure className="serviceImg absolute left-0 z-3 h-screen w-3/5">
          <Image 
            src="/img/service-customerdesign.jpg"
            alt="Customer experience design"
            layout="fill"        
          />
        </figure>

        <div className="container relative w-100 h-screen mx-auto flex flex-row items-center justify-end flex-nowrap">

          <span className="bigNumber absolute right-4 top-10 font-semibold text-lightgrey">03</span>

          <div className="w-1/3 self-center">
            <h2 className="font-semibold text-5xl leading-tight">Customer experience design</h2>
            <p className="font-normal text-xl leading-normal mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, sollicitudin duis sodales mattis. Ut aliquam sit in amet.</p>
          </div>

          <ArrowDown className="bottom-7 left-2/3" dark />

        </div>
      </section>

    </>
  );
}
