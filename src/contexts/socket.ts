import { createContext } from "react";
import { io } from "socket.io-client";

const host = process.env.socketHost || 'http://127.0.0.1:4000';
const socket = io(host, {
  withCredentials: true,
  transports: ["websocket", "polling"],
});

export const socketContext = createContext(socket);
