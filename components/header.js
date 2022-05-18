//create an arrow function called header
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
//import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Logo from './logo';
import ThreeSlice from './three-slice';

const Header = () => {

  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    const aniStart = async () => {
      timer = setTimeout(() => {
        setIsActive(true);
        const tl = gsap.timeline();
        tl.to('.cover-strip', {
          duration: 0.3,
          ease: 'Expo.easeInOut',
          stagger: 0,
        }, 0);
        tl.to('.fromLeft', {
          xPercent: 99,
        }, 0);
        tl.to('.fromRight', {
          xPercent: -99,
        }, 0);
      }, 0);
    };
    const aniEnd = () => {
      console.log(isActive);
      if (timer) {
        clearTimeout(timer);
      }
      const tl = gsap.timeline();
      if (isActive) {
        tl.to('.cover-strip', {
          duration: 0.3,
          ease: 'Expo.easeInOut',
          stagger: 0,
        }, 0);
        tl.to('.fromLeft', {
          xPercent: 0,
        }, 0);
        tl.to('.fromRight', {
          xPercent: -1,
        }, 0);
        setIsActive(false);
      }

      tl.set('.fromLeft', { clearProps: "all" });
      tl.set('.fromRight', { clearProps: "all" });
      clearTimeout(timer);

    };

    router.events.on('routeChangeStart', aniStart);
    router.events.on('routeChangeComplete', aniEnd);
    router.events.on('routeChangeError', aniEnd);

    return () => {
      router.events.off('routeChangeStart', aniStart);
      router.events.off('routeChangeComplete', aniEnd);
      router.events.off('routeChangeError', aniEnd);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [router]);

  //gsap.registerPlugin(ScrollTrigger); 
  useEffect(() => {

    //const tl = gsap.timeline();
    
    // gsap.to("body", {
    //   backgroundColor:"red",
    //   scrollTrigger: {
    //     trigger: ".intro",
    //     start: "top top", // when the top of the trigger hits the top of the viewport
    //     end: "bottom top", // end after scrolling 500px beyond the start
    //     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    // }});

  //end useEffect
  }, [])


  return (
    <>

      <ThreeSlice />

      <div className="container mx-auto flex justify-between py-8 fixed z-40 left-2/4 -translate-x-1/2">    
        <Logo dark />
        <ul className="flex gap-x-5 items-center">          
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/brand-guidelines">Branding</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
