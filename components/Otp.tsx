import { Dispatch, FC, SetStateAction } from "react";
interface IProps {
  setIsValid: Dispatch<SetStateAction<boolean>>;
}

const OtpBox: FC<IProps> = ({ setIsValid }) => {
  function tabChange(val: number) {
    const elements = document.querySelectorAll("input");
    if (elements[val - 1].value != "" && elements[val]) {
      elements[val].focus();
    } else if (elements[val - 1].value === "") {
      elements[val - 2].focus();
    }
    if (elements[3].value != "") {
      setIsValid(true);
    }
  }

  return (
    <div className="otp__boxes">
      <div className="circle">
        <input
          className="circle"
          onKeyUp={() => tabChange(1)}
          type="text"
          pattern="\d*"
          maxLength={1}
        />
      </div>
      <div className="circle">
        <input
          className="circle"
          onKeyUp={() => tabChange(2)}
          type="text"
          pattern="\d*"
          maxLength={1}
        />
      </div>
      <div className="circle">
        <input
          className="circle"
          onKeyUp={() => tabChange(3)}
          type="text"
          pattern="\d*"
          maxLength={1}
        />
      </div>
      <div className="circle">
        <input
          className="circle"
          onKeyUp={() => tabChange(4)}
          type="text"
          pattern="\d*"
          maxLength={1}
        />
      </div>
    </div>
  );
};

export default OtpBox;
