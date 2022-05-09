//create an arrow function called header
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Logo from './logo';

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
          yPercent: 100,
          duration: 0.3,
          ease: 'Expo.easeInOut',
          stagger: 0.1,
        });
      }, 300);
    };
    const aniEnd = () => {
      console.log(isActive);
      if (timer) {
        clearTimeout(timer);
      }
      const tl = gsap.timeline();
      if (isActive) {
        tl.to('.cover-strip', {
          yPercent: 200,
          duration: 0.3,
          ease: 'Expo.easeInOut',
          stagger: -0.1,
        });
        setIsActive(false);
      }

      tl.set('.cover-strip', { yPercent: 0 });
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

  return (
    <>
      <div className="flex flex-col overflow-hidden relative z-50">
        <div
          id="cover"
          className="cover-strip h-screen w-4/12 bg-darkgrey fixed top-0 left-0 cover "
        ></div>
        <div
          id="cover1"
          className="cover-strip h-screen w-4/12 bg-darkgrey fixed top-0 left-1/3 cover"
        ></div>
        <div
          id="cover2"
          className="cover-strip h-screen w-4/12 bg-darkgrey fixed top-0 left-2/3 cover"
        ></div>       
      </div>
      <div className="container mx-auto flex justify-between py-8 absolute left-2/4 -translate-x-1/2">    
        <Logo dark />
        <ul className="flex gap-x-5">          
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
