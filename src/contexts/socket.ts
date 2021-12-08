import { createContext } from "react";
import { io } from "socket.io-client";

const socket = io(SOCKET_HOST, {
  withCredentials: true,
  transports: ["websocket", "polling"],
});

export const socketContext = createContext(socket);
