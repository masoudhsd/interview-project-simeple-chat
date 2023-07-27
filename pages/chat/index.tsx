import { FaSearch } from "react-icons/fa";
import ChatFooter from "../chatFooter";
import ChatBox from "@/components/ChatBox";

const Chat = () => {
  return (
    <div className="chat">
      <header className="header chat__header">
        <div className="search-input">
          <input
            type="text"
            name="search"
            className="input"
            placeholder="Search by name, number..."
          />
          <label className="search-input__icon" htmlFor="search">
            <FaSearch />
          </label>
        </div>
        <ul className="tabs">
          <li tabIndex={-1}>Chats</li>
          <li tabIndex={-1}>Calls</li>
        </ul>
      </header>
      <ChatBox
        imageSrc="/contacts/contact1.png"
        name="John Doe"
        id={1}
        lastMessage="Hello"
        time="18:22"
      />
      <ChatBox
        imageSrc="/contacts/contact2.png"
        name="Maria Smith"
        id={2}
        lastMessage="Hello"
        time="18:22"
      />
      <ChatBox
        imageSrc="/contacts/contact3.png"
        name="John Doe"
        id={3}
        lastMessage="Hello"
        time="18:22"
      />
      <ChatBox
        imageSrc="/contacts/contact4.png"
        name="Peter Bruk"
        id={4}
        lastMessage="Hello"
        time="18:22"
      />

      <ChatFooter />
    </div>
  );
};

export default Chat;
