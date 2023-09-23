import { FC } from "react";
import { useChatHelper } from "./chat.helper";

import "./styles/animation.css";
import "./styles/chatStyle.css";

import { ChatList } from "./blocks/chatList";
import { MessageInfo } from "./chat.types";

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
