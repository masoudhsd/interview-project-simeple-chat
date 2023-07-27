import { useState, FC, useEffect } from "react";

const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

interface IProps {
  email: string;
}

const useIsValidEmail: FC<IProps> = ({ email }) => {
  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    setIsValidEmail(emailRegex.test(email));
  }, [email]);

  return isValidEmail;
};

export default useIsValidEmail;
