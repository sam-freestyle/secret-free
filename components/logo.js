import Link from 'next/link';
import Image from 'next/image';
import PropTypes from "prop-types";

const Logo = ({width, height, dark}) => (
    <Link href="/">
        <a>
        <Image 
            src={dark ? '/logo.svg' : '/logoOff.svg'} 
            width={width || 84}
            height={height || 89}
            layout="intrinsic"        
        />    
        </a>
    </Link> 
//   <svg
//     width={309}
//     height={326}
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"    
//     {...props}
//   >
//     <path
//       clipRule="evenodd"
//       d="M35.178 78.93V66.254h49.128V41.957H35.178V25.458h58.72V.144H5.904V101.273h29.275V78.931Zm97.444-3.23V64.795h17.861c10.034 0 15.682 3.804 18.348 10.905h.034v.034c.615 3.938.987 7.845 1.323 11.382.688 7.229 1.228 12.911 3.404 14.157h29.316v-1.518c-2.684-.959-2.995-5.672-3.496-13.25v-.001c-.206-3.133-.446-6.755-.898-10.804h.02c-1.707-11.836-7.041-18.364-17.321-21.884v-.506c9.96-3.52 15.521-7.782 18.101-15.747.7-1.733 1-3.122 1-3.655 0-22.457-16.428-32.451-40.137-32.451h-57.085v99.816h29.543V75.7h-.013Zm0-37.766v-12.84h30.656c4.367.054 7.98 3.19 8.694 7.304.04.236.073.478.1.721l.001.019v.001c.02.25.039.493.039.749 0 .297-.014.593-.047.89-.027.29-.073.574-.133.857-.814 3.985-4.374 6.986-8.654 7.034H155.744v-.014c-.127.003-.251.008-.374.013-.184.007-.366.014-.553.014h-22.202v-4.74l.007-.008Zm31.416 115.594c3.803-.111 7.903-.23 13.038.367l-.006-.007c1.177.138 2.429.256 3.73.378 12.454 1.176 29.421 2.778 29.421 25.566 0 4.183-1.077 9.445-2.201 12.973h-.006c-6.034 16.439-23.834 25.357-45.58 25.357-30.991 0-51.373-13.815-52.028-39.807h29.031c1.304 11.846 8.97 16.777 22.836 16.777 9.144 0 18.141-3.231 18.723-11.475h.02c-.549-7.661-9.796-8.175-19.517-8.716-1.167-.065-2.341-.13-3.507-.208-2.73-.183-5.397-.203-8.077-.222h-.003c-6.913-.051-13.921-.102-22.355-2.956l-2.368-1.301c-7.967-5.249-11.191-11.171-11.191-23.604 0-25.161 21.044-36.184 46.322-36.184 25.278 0 44.851 11.508 45.995 36.184H178.1c-1.144-9.046-7.994-14.146-18.757-14.146-10.114 0-16.803 4.446-16.803 11.023 0 4.358 2.515 6.962 7.485 9.032 5.133 1.227 9.35 1.104 14.013.969Zm44.308-39.122v25.484h34.891v75.645h29.698V139.89h35.226v-25.484h-99.815Zm-92.12 111.636h30.342v74.299h55.026v25.517h-85.368v-99.816Zm-59.65 40.866-23.78-40.866H.65l32.259 52.392 8.493 16.101v31.323H71.75v-31.323l8.493-16.101 32.259-52.392H80.355l-23.78 40.866ZM308.16 1.457h-100v24h100v-24ZM5.903 114.406h100v24h-100v-24Zm302.258-75.518h-100v24h100v-24ZM5.903 151.837h100v24h-100v-24Zm302.258-75.518h-100v24h100v-24Zm-100 149.723h100v24h-100v-24Zm100 37.431h-100v24h100v-24Zm-100 37.431h100v24h-100v-24ZM105.903 189.268h-100v24h100v-24Z"
//     />
//   </svg>
)

Logo.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    dark: PropTypes.bool,    
};

export default Logo