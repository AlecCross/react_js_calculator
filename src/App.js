import {
  useState,
  useRef
} from "react"
import "./App.css"
import Button from "./components/Button"

function App() {
  const inputRef = useRef(null)
  const resultRef = useRef(null)
  const [result, setResult] = useState(0)

  function plus(e) {
    e.preventDefault()
    setResult((result) => result + Number(inputRef.current.value))
  }

  function minus(e) {
    // Add the code for the minus function 
    e.preventDefault()
    setResult((result) => result - Number(inputRef.current.value))
  }

  function multiply(e) {
    // Add the code for the plus function
    e.preventDefault()
    setResult((result) => result * Number(inputRef.current.value)) 
  }

  function divide(e) {
    // Add the code for the divide function 
    e.preventDefault()
    setResult((result) => result / Number(inputRef.current.value))
  }

  function resetInput(e) {
    // Add the code for the resetInput function 
  }

  function resetResult(e) {
    // Add the code for the resetResult function 
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {/* add the value of the current total */}
        </p>

        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        {/* Add the subtract button */}
        <Button onClick={minus} text={"-"}/>
        {/* Add the multiply button */}
        <Button onClick={plus} text={"*"}/>
        {/* Add the divide button */}
        <Button onClick={divide} text={"/"}/>
        {/* Add the resetInput button */}
        {/* Add the resetResult button */}
      </form>
    </div>
  )
}

export default App 
