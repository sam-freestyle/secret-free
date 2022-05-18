import Link from 'next/link';
import Image from 'next/image';
import PropTypes from "prop-types";

const ArrowDown = ({width, height, dark, className}) => (
    <Link href="#">
        <a className={`scrollDown absolute bottom-10 left-0 z-5 `+className}>
        <Image 
            src={dark ? '/arrow-down.svg' : '/arrow-downOff.svg'} 
            width={width || 45}
            height={height || 43}
            layout="intrinsic"
        />    
        </a>
    </Link> 
)

ArrowDown.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    dark: PropTypes.bool,    
};

export default ArrowDown
