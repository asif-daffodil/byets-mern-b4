import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const CounterCompo = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6 mx-auto border rounded shadow p-3 d-flex justify-content-center align-items-center gap-3">
                    <button className="btn btn-success" onClick={() => dispatch(increment())}>+</button>
                    <span className="fs-1">{count}</span>
                    <button className="btn btn-danger" onClick={() => dispatch(decrement())}>-</button>
                </div>
            </div>
        </div>
    );
};

export default CounterCompo;