import { useEffect, useRef } from "react";

function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    const numRef = useRef<number>(0);
    return (
        <div>
            <div
                onClick={() => {
                    numRef.current++;
                }}
            >
                {numRef.current}
            </div>
        </div>
    );
}

export default App;
