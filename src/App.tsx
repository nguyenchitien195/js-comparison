import { useRef, useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const firstValue = useRef<any>(null);
  const secondValue = useRef<any>(null);
  const comparisonOperator = useRef<any>(null);

  const handleCalculate = () => {
    if (comparisonOperator.current.value === "==") {
      if (firstValue.current.value == secondValue.current.value) {
        setResult("TRUE");
      } else {
        setResult("FALSE");
      }
    } else {
      if (firstValue.current.value === secondValue.current.value) {
        setResult("TRUE");
      } else {
        setResult("FALSE");
      }
    }
  };

  return (
    <div className="grid place-items-center">
      <div>
        <div className="flex p-2 gap-2">
          <input ref={firstValue} className="border px-2" type="text" />
          <select ref={comparisonOperator} name="" id="">
            <option value="==">==</option>
            <option value="===">===</option>
          </select>
          <input ref={secondValue} className="border px-2" type="text" />
          <button className="border px-2 py-1" onClick={handleCalculate}>
            Compare
          </button>
        </div>
        <span>Result: {result}</span>
      </div>
    </div>
  );
}

export default App;
