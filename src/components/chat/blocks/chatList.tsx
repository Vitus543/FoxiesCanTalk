import { FC } from "react";
import parse from "html-react-parser";
import { MessageInfo } from "../chat.Types";

export const ChatList: FC<MessageInfo> = (props) => {
  const { text, user } = props;
  return (
    <>
      <li>
        {user}
        {text && <p>{parse(text)}</p>}
      </li>
    </>
  );
};
