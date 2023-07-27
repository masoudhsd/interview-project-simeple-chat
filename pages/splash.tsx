import Image from "next/image";
import { FC } from "react";

const Splash: FC = () => {
  return (
    <div>
      <Image alt="splash" src={"/Splash-screen.png"} priority fill />
    </div>
  );
};

export default Splash;
