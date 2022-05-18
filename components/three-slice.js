

const ThreeSlice = () => {
    return (
    
        <div className="flex flex-row overflow-hidden relative z-50">
            <div
            id="cover"
            className="cover-strip fromLeft h-1/3 w-screen bg-darkgrey fixed top-0 cover"
            ></div>
            <div
            id="cover1"
            className="cover-strip fromRight h-1/3 w-screen bg-darkgrey fixed top-1/3 coverRight"
            ></div>
            <div
            id="cover2"
            className="cover-strip fromLeft h-1/3 w-screen bg-darkgrey fixed bottom-0 cover"
            ></div>       
        </div>

    )

};

export default ThreeSlice
