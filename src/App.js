import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./component/Box";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: count + 1 });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <Box />
    </div>
  );
}

export default App;
