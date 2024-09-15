import Image from "next/image"
import TransitionEl  from "./components/TransitionEl"
import Staggered from "./components/Staggered"
import NiceBorder from "./components/NiceBorder"

export default function Home() {
  return (
      <div>
        <div className="bg-white h-screen  w-screen flex justify-center items-center">
          <div className="overflow-hidden h-12 group cursor-pointer font-sans font-extralight">
            <div className="w-full h-12 bg-white text-black border-gray-900 flex items-center px-8 group-hover:opacity-0 duration-1000 transition-all ease-in-out">
                  NEXT:WORK
            </div>
            <div className="z-50 w-full h-12 bg-black text-white flex items-center px-8 group-hover:-translate-y-12 group-hover:-translate-x-0 -translate-x-10 transition-all duration-[400ms] rotate-[20deg] group-hover:rotate-0 opacity-0 group-hover:opacity-100">
                <div className="translate-y-6 delay-300 group-hover:translate-y-0 transition-all duration-700 ease-out">
                    NEXT:WORK
                </div>
            </div>
          </div>
        </div>
    <div className="bg-white w-full h-full flex justify-center items-center">
        <div className="border border-white overflow-hidden relative group">
            <Image
            className="group-hover:scale-110 transition-all duration-700 ease-out group-hover:opacity-70"
            src="https://images.unsplash.com/photo-1726053468131-01f99f61715d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={400}
            alt="unsplash-img"
           >
           </Image>
           <div className="font-extralight font-sans text-md z-0 px-4 opacity-0 group-hover:opacity-100 w-44 h-12 flex justify-center items-center bg-white text-black border border-gray-900 absolute top-[45%] left-[20%] transition-all duration-700 ease-out cursor-pointer">
              <div className="translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-700 transition-all ease-out">
                SEE ALL WORK
              </div>
           </div>
       </div> 
    </div>
    <TransitionEl />
    <Staggered />
    <NiceBorder />
  </div>
  )
}