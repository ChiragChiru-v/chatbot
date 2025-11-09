import React from "react";
import Avatar from "./Avatar.jsx";
import CopyButton from "./CopyButton.jsx";
import ReactMarkdown from "react-markdown";

export default function MessageBubble({ role, text }) {
  const isUser = role === "user";
  const isError = role === "error";
  return (
    <div className={`message ${isUser ? "message--right" : ""}`}>
      <div
        className={`bubble ${
          isUser ? "bubble--user" : isError ? "bubble--error" : "bubble--ai"
        }`}
      >
        <div className="bubble__header">
          <Avatar role={role} />
          <span className="meta">{role}</span>
        </div>
        <ReactMarkdown>{text}</ReactMarkdown>
        {!isError && (
          <div style={{ marginTop: 8, opacity: 0.8 }}>
            <CopyButton text={text} />
          </div>
        )}
      </div>
    </div>
  );
}
