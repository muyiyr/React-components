import React, {
    forwardRef,
    useRef,
    useEffect,
    ForwardRefRenderFunction,
} from "react";

// const Guang: ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {
//     return (
//         <div>
//             <input ref={ref}></input>
//         </div>
//     );
// };

// const WrapedGuang = React.forwardRef(Guang);
const WrapedGuang = forwardRef<HTMLInputElement>((props, ref) => {
    return (
        <div>
            <input ref={ref}></input>
        </div>
    );
});

function App() {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log("ref", ref.current);
        ref.current?.focus();
    }, []);

    return (
        <div className="App">
            <WrapedGuang ref={ref} />
        </div>
    );
}

export default App;
