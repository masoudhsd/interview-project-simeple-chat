import Message from "@/components/uiElements/message";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { BiSolidSend } from "react-icons/bi";
import { FiPhone, FiVideo } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Contact = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const { query, back } = useRouter();

  function handleMessage(e: any) {
    setMessage(e.target.value);
  }

  function handleSendMessage(message: string) {
    if (message.length <= 0) {
      return;
    }
    setMessages([...messages, message]);
    setMessage("");
  }

  return (
    <main className="chat-page">
      <header className="header chat-page__header">
        <div className="chat-page__contact">
          <div onClick={() => back()}>
            <FaArrowLeft />
          </div>
          <Image
            src={`${query.imageSrc}`}
            alt="contact image"
            width={30}
            height={30}
          />
          <p>{query.name}</p>
        </div>

        <div className="chat-page__icons">
          <FiPhone />
          <FiVideo />
          <HiOutlineDotsVertical />
        </div>
      </header>
      <main>
        {messages.map((message) => (
          <Message text={message} key={message} />
        ))}
      </main>
      <footer className="chat-page__footer">
        <div className="chat-page__footer__input">
          <input
            type="text"
            className="input"
            value={message}
            onChange={handleMessage}
            placeholder="Message"
            name="message"
          />
          <label className="" htmlFor="message">
            <BsEmojiSmile />
          </label>
        </div>
        <div
          className="chat-page__footer__icon"
          onClick={() => handleSendMessage(message)}
        >
          <BiSolidSend />
        </div>
      </footer>
    </main>
  );
};
export default Contact;
