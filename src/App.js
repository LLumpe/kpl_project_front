import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import autofit from "autofit.js";
import "remixicon/fonts/remixicon.css";
import { io } from "socket.io-client";
const socket = io("ws://120.55.96.200:3001"); //全局变量socket
function App() {
  const initSocket = () => {
    // 连接服务器时的回调函数
    socket.on("connect", () => {
      console.log("websocket successfully connected!");
    });
    socket.on("disconnect", (e) => {
      console.log("websocket disconnect: ", e);
    });
    socket.on("emitDataList", (data) => {
      //监听后端返回事件，XXXX是与后端约定的字段
      console.log("emitDataList：", data);
    });
  };
  useEffect(() => {
    initSocket();
    autofit.init({
      dh: 1080,
      dw: 1920,
      el: "body",
      resize: true,
    });
    return () => {
      socket.off("connect");
    };
  }, []);
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
