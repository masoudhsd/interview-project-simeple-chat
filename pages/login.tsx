import Button from "@/components/uiElements/button";
import Link from "@/components/Link";
import { FC, FormEvent, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import useValidPhone from "@/hooks/useValidPhone";

const Login: FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const router = useRouter();

  function handlePhoneNumberChange(event: any) {
    setPhoneNumber(event.target.value);
  }

  function handleLogin() {
    router.push("/otp");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  const isValidPhone = useValidPhone({ phoneNumber });

  return (
    <div className="login">
      <header className="login__header header">
        <FaArrowLeft />
        <h1>Login</h1>
        <p>Enter your 10-digit mobile number to continue.</p>
      </header>
      <main>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="number"
              name="number"
              className="input"
              placeholder="+98 Enter your Phone Number"
              onChange={handlePhoneNumberChange}
            />
            <label htmlFor="number">
              <p>Phone</p>
            </label>
          </div>

          <Button
            size="lg"
            text="Login"
            color="primary"
            disable={!isValidPhone}
            onClick={handleLogin}
          />
        </form>
        <div className="login__register">
          <p>Dont have an account?</p>
          <Link href="register" classNames="btn" text="Register" />
        </div>
      </main>
    </div>
  );
};

export default Login;
