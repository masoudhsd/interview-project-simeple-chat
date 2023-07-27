import Link from "@/components/Link";
import OtpBox from "@/components/Otp";
import Button from "@/components/uiElements/button";
import { useRouter } from "next/router";
import { FC, FormEvent, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Otp: FC = () => {
  const [isValid, setIsValid] = useState<boolean>(false);

  const router = useRouter();
  
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    router.push("/chat");
  }

  return (
    <div className="otp">
      <header className="header otp__header">
        <FaArrowLeft />
        <h1>Login</h1>
        <p>Enter your 10-digit mobile number to continue.</p>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <OtpBox setIsValid={setIsValid} />
          <Button
            size="lg"
            text="Verify"
            color="primary"
            disable={!isValid}
            onClick={handleSubmit}
          />
          <Button
            size="lg"
            text="Resend OTP"
            color="white"
            disable={!isValid}
            onClick={handleSubmit}
          />

        </form>
        <div className="otp__login">
          <p>Dont have an account?</p>
          <Link href="register" classNames="btn" text="Register" />
        </div>
      </main>
    </div>
  );
};

export default Otp;
