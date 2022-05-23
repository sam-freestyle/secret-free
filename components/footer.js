//create an arrow function called footer
import Link from 'next/link';
import Partners from "../components/partners";
import Button from "../components/button";


const Footer = () => {
  return (
        
      <section id="contact" className="sectionDark w-100 h-screen flex flex-col justify-between pt-32 pb-10">

        {/* CTA */}
        <div className="container relative mx-auto flex flex-row flex-nowrap">

          <div className="w-2/3">
          <h2 className="font-semibold text-7xl leading-tight">You lose ground when you stand still. Let's get moving.</h2>
          </div>

          <div className="w-1/3 self-end mt-56">
            <p className="font-normal text-2xl leading-normal">It's always better to chat, so give us a call or email us to get started</p>
            <h4 className="font-semibold text-3xl mt-9">
              <Link href="tel:01926 652 832">
                <a>
                  <span className="text-grey">+44 </span>01926 652 832  
                </a>
              </Link> 
            </h4>
            <h4 className="font-semibold text-3xl mt-5">
              <Link href="mailto:hello@freestyle.agency">
                <a>
                  hello@freestyle.agency  
                </a>
              </Link> 
            </h4>
          </div>

        </div>

        {/* Bottom */}
        <div className="container relative mx-auto flex flex-row flex-nowrap">
          <div className="w-1/3">
            <p className="text-2xl">&copy; Freestyle</p>
            <p className="text-base mt-8">Freestyle Interactive LTD trading as Freestyle</p>
            <p className="text-base mt-5">Registered in England, UK</p>
            <p className="text-base mt-5">Company no. 03928921 | VAT no. 753777686</p>
          </div>
          <div className="w-1/3 flex flex-col">
            <ul className="flex gap-x-5">          
              <li>
                <a className="font-semibold text-xl" href="/work">Careers</a>
              </li>
              <li>
                <a className="font-semibold text-xl" href="/brand-guidelines">Resources</a>
              </li>
            </ul>
        
            <Partners className="mt-8" />
          </div>
          <div className="w-1/3 flex flex-col">

            <Button dark external link="https://instagram.com/freestyleint" >
              Instagram
            </Button>
            <Button dark external className="mt-5" link="https://linkedin.com/freestyleint" >
              LinkedIn
            </Button>

          </div>
        </div>
        
      </section>
    
  );
};
export default Footer; 