import { useState } from "react";

const UseState = () => {
    const [state, setState] = useState(0);

    return (
        <>
            <h2>Count</h2>
            {state}
            <button onClick={() => setState((prev) => prev + 1)}>Add</button>
        </>
    );
}

export default UseState;