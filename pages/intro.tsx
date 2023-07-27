import Button from "@/components/uiElements/button";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const texts = [
  { step: 1, text: "Welcome to chatboat, a great friend to chat with you" },
  {
    step: 2,
    text: "If you are confused about what to do just open Chatboat app",
  },
  { step: 3, text: "Chatboat will be readyto chat & make you happy" },
];

const Intro: FC = () => {
  const [step, setStep] = useState<number>(1);

  const router = useRouter();

  function clickHandler() {
    setStep((prev) => ++prev);
  }
  useEffect(() => {
    if (step > 3) {
      router.push("/register");
    }
  }, [step]);

  function handleSkip() {
    router.push("/register");
  }

  return (
    <div className="col">
      <Button size="sm" color="primary" text="Skip" onClick={handleSkip} />
      <Image alt="" src={"/image-1.png"} priority width={200} height={200} />
      <p>{texts[step - 1]?.text}</p>
      <Button size="lg" color="primary" text="Next" onClick={clickHandler} />
    </div>
  );
};

export default Intro;
