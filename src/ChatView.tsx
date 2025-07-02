import { useState } from "react";


function ChatView() {
    const [msg, setMsg] = useState("");

    return (
        <main className="container">
            <h1>亞比幾歲壓?</h1>
            <input
                type="number"
                placeholder="30以下"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            />
            <button
                type="button"
                onClick={() => setMsg("")}
            >Reset</button>
            {msg && <p>你確定是 {msg} 歲嗎?</p>}
        </main>
    );
}

export default ChatView