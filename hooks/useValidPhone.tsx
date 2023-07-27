import { FC, useEffect, useState } from "react";

const phoneNumberRegex = /^09\d{9}$/;

interface IProps {
  phoneNumber: string;
}

const useValidPhone: FC<IProps> = ({ phoneNumber }) => {
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState<boolean>(false);

  useEffect(() => {
    setIsValidPhoneNumber(phoneNumberRegex.test(phoneNumber));
  }, [phoneNumber]);

  return isValidPhoneNumber;
};

export default useValidPhone;
