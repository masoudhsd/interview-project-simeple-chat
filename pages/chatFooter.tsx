import { FC } from "react";
import { BsChatRightText } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";

const ChatFooter: FC = () => {
  return (
    <footer className="chat-footer">
      <li className="chat-footer__icon" tabIndex={-1}>
        <BsChatRightText />
        <p>Chats</p>
      </li>
      <div className="chat-footer__icon" tabIndex={-1}>
        <RiContactsLine />
        <p>Contacts</p>
      </div>
      <div className="chat-footer__icon" tabIndex={-1}>
        <AiOutlineSetting />
        <p>Setting</p>
      </div>
    </footer>
  );
};

export default ChatFooter;
