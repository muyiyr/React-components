import React, { PropsWithChildren } from "react";
import logo from "./logo.svg";
import "./App.css";

interface AaaProps {
    name: string;
    content: React.ReactElement;
}
function App() {
    return (
        <div>
            <Aaa name={"guang"} content={<button>xxx</button>}></Aaa>
        </div>
    );
}
function Aaa(props: AaaProps) {
    return (
        <div>
            aaa,{props.name}
            {props.content}
        </div>
    );
}

export default App;
