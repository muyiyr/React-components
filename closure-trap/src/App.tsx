import { useEffect, useRef, useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setInterval(() => {
            // count 一直是0
            console.log(count);
            setCount(count + 1);
        }, 1000);
    }, []);
    return <div>{count}</div>;
}

export default App;
