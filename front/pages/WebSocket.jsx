import React, { useState, useCallback, useMemo, useRef } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

const WebSocketWrap = ({ children }) => {
  const [socketUrl, setSocketUrl] = useState("ws://localhost:6005");
  const messageHistory = useRef([]);

  const { sendMessage, lastMessage, lastJsonMessage, readyState } =
    useWebSocket(socketUrl);

  useMemo(() => {
    if (lastJsonMessage != null) {
      console.log(lastJsonMessage); // 여기서 객체로 받아옴. 이걸처리해주면됨. 받아서 리덕스나? 뭐 컨텍스트 업데이트해주면됨.
    }
  }, [lastJsonMessage]);

  return <>{children}</>;
};

export default WebSocketWrap;