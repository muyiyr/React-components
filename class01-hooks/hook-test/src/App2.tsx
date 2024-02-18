import { useEffect, useState } from "react";

async function queryData() {
    const data = await new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(666);
        }, 2000);
    });
    return data;
}
const App = () => {
    const [num, setNum] = useState(0);
    // useEffect(() => {
    //     queryData().then((data) => {
    //         console.log("111");
    //         setNum(data);
    //     });
    // }, [Date.now()]);
    useEffect(() => {
        console.log("effect");
        const timer = setInterval(() => {
            console.log(num);
        }, 1000);
        return () => {
            console.log("clean up");
            clearInterval(timer);
        };
    }, [num]);
    return (
        <div
            onClick={() => {
                setNum((preNum) => preNum + 1);
            }}
        >
            {num}
        </div>
    );
};
export default App;
