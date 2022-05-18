import Link from 'next/link';
import PropTypes from "prop-types";

const Button = ({dark, external, className, link, children}) => (

    <Link href={link || "#"}>
        <a className={(dark ? 'dark ' : 'light ') + (external ? 'external ' : 'internal ') + `button text-2xl font-semibold ` + (className || "")}>
            {children}
        </a>
    </Link> 
    
)

Button.propTypes = {
    dark: PropTypes.bool,
    external: PropTypes.bool,    
    link: PropTypes.string,    
};

export default Button
