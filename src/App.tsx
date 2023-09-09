import ComfyJS from "comfy.js";
import { useEffect } from "react";
import { Chat } from "./components";

function App() {

  useEffect(() => {
    ComfyJS.Init("alyxa_the_kitsune");
  }, []);

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "100%",
      }}
    >
      <Chat />
    </div>
  );
}

export default App;
