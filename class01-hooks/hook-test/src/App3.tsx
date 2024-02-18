import { Reducer, useReducer } from "react";
interface Data {
    result: number;
}
interface Action {
    type: "add" | "minus";
    num: number;
}
const reducer: Reducer<Data, Action> = (state, action) => {
    switch (action.type) {
        case "add":
            return { result: state.result + action.num };
            state.result += action.num;
            return state;
        case "minus":
            return { result: state.result - action.num };
        default:
            return state;
    }
};
const App = () => {
    // const [data, dispatch] = useReducer(reducer, { result: 0 });
    const [data, dispatch] = useReducer<Reducer<Data, Action>, string>(
        reducer,
        "zero",
        (param) => {
            return {
                result: param === "zero" ? 0 : 1,
            };
        }
    );
    return (
        <>
            <div
                onClick={() => {
                    dispatch({
                        type: "add",
                        num: 1,
                    });
                }}
            >
                加
            </div>
            <div
                onClick={() => {
                    dispatch({
                        type: "minus",
                        num: 1,
                    });
                }}
            >
                减
            </div>
            <div>{data.result}</div>
        </>
    );
};
export default App;
