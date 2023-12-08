import { parseEther } from "viem";
import { arrow, arrow2, colorColorWheel } from "../assets";
import "./SpinWheel.css";
import { toast } from "react-toastify";
import { sendTransaction } from "@wagmi/core";

function SpinWheel({ wheelRef }) {
  return (
    <div className="body  h-[70%]">
      <img
        src={colorColorWheel}
        ref={wheelRef}
        className="image"
        onTransitionEnd={async () => {
          // wheelRef.current.style.transition = "";
          // wheelRef.current.style.transform = "";
          // toast.error("You lose");
        }}
      />

      {/* <div
        className="container"
        ref={wheelRef}
        onTransitionEnd={() => {
          wheelRef.current.style.transition = "";
          wheelRef.current.style.transform = "";
          toast.error("You lose");
        }}
      >
        <div className="circle1"></div>

        <div className="circle2">
          <div className="inner-circle">
            <div className="one">L</div>
            <div className="two">W</div>
            <div className="three">L</div>
            <div className="four">W</div>
            <div className="five">L</div>
            <div className="six">W</div>
            <div className="seven">L</div>
            <div className="eight">W</div>
          </div>
        </div>

        <div className="circle3"></div>
      </div> */}
    </div>
  );
}

export default SpinWheel;
