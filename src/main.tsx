import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ChatView from "./ChatView";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChatView />
  </React.StrictMode>,
);
