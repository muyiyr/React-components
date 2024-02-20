import React, {
    forwardRef,
    useRef,
    useEffect,
    ForwardRefRenderFunction,
    useImperativeHandle,
} from "react";

// useImperativeHandle
interface RefProps {
    aaa: () => void;
}
const WrapedGuang = forwardRef<RefProps, { a: string }>((props, ref) => {
    const { a } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(
        ref,
        () => {
            return {
                aaa() {
                    inputRef.current?.focus();
                },
            };
        },
        [inputRef]
    );
    return (
        <div>
            <input ref={inputRef}></input>
            <div>{a}</div>
        </div>
    );
});

function App() {
    const ref = useRef<RefProps>(null);

    useEffect(() => {
        console.log("ref", ref.current);
        ref.current?.aaa();
    }, []);

    return (
        <div className="App">
            <WrapedGuang ref={ref} a={"1111"} />
        </div>
    );
}

export default App;
