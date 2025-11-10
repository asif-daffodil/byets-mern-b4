import { useEffect, useState } from "react"
import MyComponents from "./components/MyComponents"


function App() {

  const paraStyle = {
    color: "blue",
    backgroundColor: "lightgreen"
  }

  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("this function has been trugared successfully");
  }, [num])

  return (
    <div>
      <h1 style={{color: "red", backgroundColor: "lightblue"}}>Hello World</h1>
      <p style={paraStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cumque totam saepe commodi reprehenderit est rerum provident non, doloremque quae excepturi iusto ea adipisci laboriosam dicta eveniet voluptas, blanditiis recusandae!
      </p>
      <MyComponents great="Hello" person="Abul" />
      <MyComponents great="Hi" person="Mofiz" />
      <div className="text-6xl text-center mb-6">{num}</div>
      <div className="flex justify-center gap-2">
        <button className="border rounded shadow px-4 py-2 cursor-pointer" onClick={() => setNum(num + 1)}>Increment</button>
        <button className="border rounded shadow px-4 py-2 cursor-pointer" onClick={() => setNum(num - 1)}>Decrement</button>
      </div>
    </div>
  )
}

export default App
