import { FC } from "react";
import { useChatHelper } from "./chat.helper";
import { ChatList } from "./blocks/chatList";
import { MessageInfo } from "./chat.types";
import "./styles/animation.css";
import "./styles/chatStyle.css";

export const Chat: FC = () => {
  const chatDataArray = useChatHelper();
  return (
    <div id="chat">
      <ul>
        {chatDataArray.map((chat: MessageInfo) => {
          return <ChatList key={chat.id} {...chat} />;
        })}
      </ul>
    </div>
  );
};
