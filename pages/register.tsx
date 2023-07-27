import Link from "@/components/Link";
import Button from "@/components/uiElements/button";
import useIsValidEmail from "@/hooks/useValidEmail";
import useValidPhone from "@/hooks/useValidPhone";
import { useRouter } from "next/router";
import { FC, FormEvent, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Register: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function handleName(e: any) {
    setName(e.target.value);
  }
  function handleEmail(e: any) {
    setEmail(e.target.value);
  }
  function handlePhone(e: any) {
    setPhone(e.target.value);
  }

  const isValidPhone = useValidPhone({ phoneNumber: phone });
  const isValidEmail = useIsValidEmail({ email: email });

  useEffect(() => {
    if (name.length > 2 && isValidEmail && isValidPhone) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, phone, email, isValidPhone, isValidEmail]);

  return (
    <div className="register">
      <header className="register__header">
        <FaArrowLeft />
        <h1>Register</h1>
        <p>Fill up your details to register</p>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
              value={name}
              onChange={handleName}
            />
            <label htmlFor="name">
              <p>Name</p>
            </label>
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
              className="input"
              placeholder="Enter your Email"
            />
            <label htmlFor="email">
              <p>Email</p>
            </label>
          </div>
          <div className="input-box">
            <input
              type="number"
              name="number"
              value={phone}
              onChange={handlePhone}
              className="input"
              placeholder="Enter your Phone Number"
            />
            <label htmlFor="number">
              <p>Mobile</p>
            </label>
          </div>

          <div className="register__button">
            <Button
              size="lg"
              text="Register"
              color="primary"
              disable={!isFormValid}
              onClick={() => router.push("/chat")}
            />
            <div className="register__login">
              <p>Already have an account</p>
              <Link href="login" classNames="btn" text="Login" />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Register;
