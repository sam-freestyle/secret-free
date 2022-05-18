//create an arrow function called footer
import Link from 'next/link';
import Image from 'next/image';

const Partners = ({className}) => {
  return (
        
    <div className={className}>
        <p>Proud to partner with:</p>

        <div className="flex gap-x-8 mt-4">
            <Link href="#">
                <a>
                <Image 
                    src="/Flexa-Logo.svg"
                    alt="Freestyle is a Flexa approved employer"
                    width={90}
                    height={29}
                    layout="fixed"
                />    
                </a>
            </Link> 
            <Link href="#">
                <a>
                <Image 
                    src="/Ecologi-Logo.svg"
                    alt="Freestyle supporting Ecologi"
                    width={96}
                    height={49}
                    layout="fixed"
                />    
                </a>
            </Link> 
        </div>
    </div>
    
  );
};

export default Partners; 