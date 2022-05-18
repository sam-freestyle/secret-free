
import Link from 'next/link';
import Image from 'next/image';
import OverlayTitle from '../../components/overlayTitle';
import Button from "../../components/button";



export default function Whatwedo() {
  return (
    <>
      
      <div className="sectionDark relative w-100 pb-40 pt-72 flex flex-col justify-center">

        <figure className="caseImg overlay absolute left-0 top-0 h-full w-full">
          <Image 
            src="/img/casestudy-main-colour-camc.jpg"
            alt="Caravan and Motorhome Club working with Freestyle"
            layout="fill"        
          /> 
        </figure>

        <div className="container relative z-20 w-full mx-auto flex flex-col justify-center flex-wrap">
          <div className="w-full flex flex-col">
            <h1 className="font-semibold text-7xl leading-snug">A roadmap to industry-leading digital journeys for members</h1>
            <p className="opacity-70 text-xl mt-10">Work /</p>
            <h3 className="text-3xl font-semibold mt-3">The Caravan and Motorhome Club</h3>
          </div>
        </div>

      </div>


      {/*  Case Study Body  */}
      <div className="sectionLight relative w-100 flex flex-col justify-center pt-14 pb-32">


        {/*  Client  */}
        <div className="container relative w-full mx-auto flex flex-col justify-center flex-wrap">
        <OverlayTitle bigtitle="01">Client</OverlayTitle>
          <div className="w-2/3 flex">
            <h3 className="font-semibold text-3xl leading-snug">“Help us stay relevant in the market”</h3>
          </div>
          <div className="w-2/3 flex self-end mt-20">
            <p className="font-normal text-2xl leading-relaxed">With a growing base of over 1 million members, the Caravan and Motorhome Club are one of the UK's largest membership organisations, and no stranger to navigating change and disruption.</p>
          </div>
          <figure className="containImg w-full block mt-32">
              <Image 
                src="/img/camc-image-cluster.png"
                alt="Caravan Club members happy"
                layout="responsive"
                width="100"
                height="100"
              />
          </figure>
        </div>

        {/*  Challenge  */}
        <div className="container relative w-full mx-auto flex flex-col justify-center flex-wrap">
        <OverlayTitle bigtitle="02">Challenge</OverlayTitle>
          <div className="w-2/3 flex">
            <h3 className="font-semibold text-3xl leading-snug">In order to stay relevant, the club knows that they need to exceed member expectations in order to gain market share.</h3>
          </div>
          <div className="w-2/3 flex self-end mt-20">
            <p className="font-normal text-2xl leading-relaxed">But between membership portals, booking systems, and external web apps, Caravan and Motorhome Club has built a dependency on legacy systems which has made it difficult to identify the best ways to innovate.</p>
          </div>
          <figure className="containImg w-full block mt-32">
              <Image 
                src="/img/floating-iphone-x-mockup-template@2x.png"
                alt="Caravan Club members happy"
                layout="responsive"
                width="100"
                height="100"
              />
          </figure>
        </div>

        {/*  Solution  */}
        <div className="container relative w-full mx-auto flex flex-col justify-center flex-wrap">
        <OverlayTitle bigtitle="03">Solution</OverlayTitle>
          <div className="w-2/3 flex">
            <h3 className="font-semibold text-3xl leading-snug">Our ongoing partnership has so far tackled different challenges at the digital technology strategy and business strategy levels.</h3>
          </div>
          <div className="w-2/3 flex self-end mt-20">
            <p className="font-normal text-2xl leading-relaxed">With a growing base of over 1 million members, the Caravan and Motorhome Club are one of the UK’s largest membership organisations, and no stranger to navigating change and disruption.</p>
          </div>
          <figure className="containImg w-full block mt-32">
              <Image 
                src="/img/floating-iphone-x-mockup-template@2x.png"
                alt="Caravan Club members happy"
                layout="responsive"
                width="100"
                height="100"
              />
          </figure>
        </div>



      </div>



    </>
  );
}
export async function getServerSideProps(context) {
  await waitload(1);
  return {
    props: { dummy: 'dummy' }, // will be passed to the page component as props
  };
}

function waitload(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}
