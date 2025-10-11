import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  return (
    <>
      <h1>{input}</h1>
      <div>
        <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="enter something" value={input} />
        <button
          disabled={input.trim() === ""}
          onClick={() => {
            setQrCode(input);
            setInput("");
          }}
        >
          generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-id" value={qrCode} size={400} bgColor="white" />
      </div>
    </>
  );
}
