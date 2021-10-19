import { useState } from "react";
import { ChildArea } from "./components/ChildArea";
import "./styles.css";

export default function App() {
  console.log("up");
  const [text, setText] = useState("");
  const onChangeText = (e) => setText(e.target.value);
  const [open, setOpen] = useState(false);
  const onClickOpen = () => setOpen(!open);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}
