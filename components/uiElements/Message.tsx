import { FC } from "react";
import { IoCheckmarkDone } from "react-icons/io5";

interface IProps {
  text: string;
}

const Message: FC<IProps> = ({ text }) => {
  return (
    <div className="message">
      <p>{text}</p>
      <div className="message__delivery ">
        <p>06:08</p>
        <IoCheckmarkDone />
      </div>
    </div>
  );
};

export default Message;
