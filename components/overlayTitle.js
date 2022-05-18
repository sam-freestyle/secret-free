//create an arrow function called footer
import PropTypes from "prop-types";

const OverlayTitle = ({dark, bigtitle, className, children}) => (

        
    <div className="multiTitle flex relative z-10">
        <span className={(dark ? 'text-offwhite opacity-10 ' : 'text-lightgrey ') + `bigNumber font-semibold  ` + (className || "")}>
            {bigtitle || "01"}
        </span>
        <h2 className="absolute z-20 top-1/2 left-32 font-semibold text-6xl -translate-y-1/2">{children}</h2>
    </div>

)

  OverlayTitle.propTypes = {
    dark: PropTypes.bool,
    bigtitle: PropTypes.string,    
};

export default OverlayTitle; 