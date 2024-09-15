
const TransitionEl = () => {

    return (
        <div className="w-full h-screen bg-white font-sans justify-center items-center flex">
            <div className="text-black text-md font-extralight group">
                <div className="w-fit inline-block group-hover:translate-y-2 group-hover:rotate-12 transition-all duration-500 ease-out">
                    <span>L</span>
                </div>
                <div className="w-fit inline-block group-hover:-translate-y-4 group-hover:-rotate-45 transition-all duration-500 ease-out">
                    <span>E</span>
                </div>
                <div className="w-fit inline-block group-hover:translate-y-2 group-hover:rotate-[-26deg] transition-all duration-500 ease-out">
                    <span>T</span>
                </div>
                <div className="w-fit group-hover:-translate-y-1 inline-block transition-all duration-500 ease-out">
                    <span>'</span>
                </div>
                <div className="w-fit group-hover:-translate-y-7 group-hover:rotate-[30deg] inline-block transition-all duration-500 ease-out">
                    <span>S</span>
                </div>
                <div className="w-fit group-hover:translate-y-10 inline-block transition-all duration-500 ease-out">
                    <span><pre> </pre></span>
                </div>
                <div className="w-fit group-hover:translate-y-4 group-hover:-rotate-6 inline-block transition-all duration-500 ease-out">
                    <span>B</span>
                </div>
                <div className="w-fit group-hover:-translate-y-4 group-hover:rotate-2 inline-block transition-all duration-500 ease-out">
                    <span>R</span>
                </div>
                <div className="w-fit group-hover:translate-y-1 group-hover:rotate-45 inline-block transition-all duration-500 ease-out">
                    <span>E</span>
                </div>
                <div className="w-fit group-hover:-translate-y-6 group-hover:rotate-[-30deg] inline-block transition-all duration-500 ease-out">
                    <span>A</span>
                </div>
                <div className="w-fit group-hover:-translate-y-2 group-hover:rotate-[30deg] inline-block transition-all duration-500 ease-out">
                    <span>K</span>
                </div>
            </div>
        </div>
    )
}

export default TransitionEl;