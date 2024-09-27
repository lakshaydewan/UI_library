import Image from "next/image";
import TransitionEl from "./components/TransitionEl";
import Staggered from "./components/Staggered";
import NiceBorder from "./components/NiceBorder";
import Blob from "./components/Blob";
import HackerHaiBhai from "./components/HackerHaiBhai";
import New_Button from "./components/New_Button";
import Scale_Card from "./components/Scale_Card";

export default function Home() {
  return (
    <div className="overflow-scroll h-screen snap-y snap-mandatory">
      <div className="h-screen snap-start">
        <New_Button />
      </div>
      <div className="h-screen snap-start">
        <Scale_Card />
      </div>
      <div className="h-screen snap-start">
        <TransitionEl />
      </div>
      <div className="h-screen snap-start">
        <Staggered />
      </div>
      <div className="h-screen snap-start">
        <NiceBorder />
      </div>
      <div className="h-screen snap-start">
        <Blob />
      </div>
      <div className="h-screen snap-start">
        <HackerHaiBhai />
      </div>
    </div>
  );
}
