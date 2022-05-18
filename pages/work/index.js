
import Image from 'next/image';
import Button from "../../components/button";
import OverlayTitle from '../../components/overlayTitle';



export default function Whatwedo() {
  return (
    <>
      
      {/*  Banner  */}
      <div className="fullScroll sectionDark w-100 flex justify-center items-center mt-0">
        <div className="container relative w-100 h-screen mx-auto flex flex-col justify-center flex-wrap">

          <div className="w-100">
            <h1 className='font-semibold text-5xl text-midgrey'>Work</h1>
            <h2 className="font-semibold text-7xl leading-tight mt-6">
            Bringing your designs to life, combining business context and technical expertise to go beyond outputs and create lasting results.
            </h2>
          </div>
          
        </div>
      </div>


      {/*  Case Study Large  */}
      <div className="sectionDark relative w-100 h-full flex flex-col justify-center">

        <figure className="caseImg overlay absolute z-10 right-0 top-0 w-3/5 h-full">
          <Image 
            src="/img/casestudy-main-colour-roehampton.jpg"
            alt="University of Roehampton working with Freestyle"
            layout="fill"        
          /> 
        </figure>
        

        <div className="container relative z-20 w-full h-screen mx-auto flex flex-col justify-center flex-wrap">
          <div className="w-2/3 flex flex-col">
            <h2 className="font-semibold text-7xl leading-snug">Creating an intuitive &amp; better converting digital experience</h2>

            <Button dark className="mt-10" link="#" >
                Read more
            </Button>
          </div>
        </div>

      </div>


      {/*  Case Study Large  */}
      <div className="sectionDark relative w-100 h-full flex flex-col justify-center mt-40">

        <figure className="caseImg overlay z-10 absolute left-0 top-0 w-3/5 h-full">
          <Image 
            src="/img/casestudy-main-colour-cimspa.jpg"
            alt="CIMSPA working with Freestyle"
            layout="fill"        
          /> 
        </figure>
        

        <div className="container relative z-20 w-full h-screen mx-auto flex flex-col justify-center flex-wrap">
          <div className="relative w-2/3 left-1/3 flex flex-col">
            <h2 className="font-semibold text-7xl leading-snug">Upskilling the sporting workforce during the pandemic</h2>

            <Button dark className="mt-10" link="#" >
                Read more
            </Button>
          </div>
        </div>

      </div>


      {/*  Case Study Large  */}
      <div className="sectionDark relative w-100 h-full flex flex-col justify-center mt-40">

        <figure className="caseImg overlay absolute z-10 right-0 top-0 w-3/5 h-full">
          <Image 
            src="/img/casestudy-main-colour-camc.jpg"
            alt="Caravan and Motorhome Club working with Freestyle"
            layout="fill"        
          /> 
        </figure>
        

        <div className="container relative z-20 w-full h-screen mx-auto flex flex-col justify-center flex-wrap">
          <div className="w-2/3 flex flex-col">
            <h2 className="font-semibold text-7xl leading-snug">A roadmap to industry-leading digital journeys for members</h2>

            <Button dark className="mt-10" link="/work/caravan-motorhome-club" >
                Read more
            </Button>
          </div>
        </div>

      </div>



      {/*  Case Study List  */}
      <div className="sectionDark relative w-100 py-40 flex flex-col justify-center mt-40">

        <div className="container w-full mx-auto flex flex-col justify-center flex-wrap">

          <OverlayTitle dark bigtitle="More">Complete list</OverlayTitle>

          <div className="caseList flex flex-col gap-y-7">

            <a className='caseItem flex w-full justify-between'>
              <h3 className="text-2xl font-semibold">Transforming the online experience for a global change maker</h3>
              <span className="button text-2xl font-semibold">Practical Action</span>
            </a>
            <a className='caseItem flex w-full justify-between'>
              <h3 className="text-2xl font-semibold">Transforming the online experience for a global change maker</h3>
              <span className="button text-2xl font-semibold">Practical Action</span>
            </a>
            <a className='caseItem flex w-full justify-between'>
              <h3 className="text-2xl font-semibold">Transforming the online experience for a global change maker</h3>
              <span className="button text-2xl font-semibold">Practical Action</span>
            </a>

          </div>

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
