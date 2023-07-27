import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

interface IProps {
  name: string;
  id: number;
  lastMessage: string;
  time: string;
  imageSrc: string;
}

const ChatBox: FC<IProps> = ({ name, lastMessage, time, imageSrc, id }) => {
  const router = useRouter();
  function handleClick() {
    router.push({
      pathname: `chat/${id}`,
      query: {
        name,
        lastMessage,
        time,
        imageSrc,
        id,
      },
    });
  }
  return (
    <main className="chat-box" onClick={handleClick}>
      <Image
        src={imageSrc}
        width={50}
        height={50}
        alt="contact image"
        priority
        className="chat-box__image"
      />
      <div className="chat-box__info-box">
        <p className="chat-box__name">{name}</p>
        <p className="chat-box__last-message">{lastMessage}</p>
      </div>
      <p className="chat-box__time">{time}</p>
    </main>
  );
};

export default ChatBox;
