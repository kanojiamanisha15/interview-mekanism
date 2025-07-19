import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const handleClear = () => {
    setCount(1);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px",
      }}
    >
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
        className=" gap-3"
      >
        <Button count={count} setCount={setCount}>
          {count}
        </Button>
        <Button count={count} setCount={setCount}>
          {count}
        </Button>
        <Button count={count} setCount={setCount}>
          {count}
        </Button>
        <Button count={count} setCount={setCount}>
          {count}
        </Button>
        <Button count={count} setCount={setCount}>
          {count}
        </Button>
        <Button count={count} setCount={setCount}>
          {count}
        </Button>
        <Button count={count} setCount={setCount}>
          {count}
        </Button>
        <Button count={count} setCount={setCount}>
          {count}
        </Button>
        <Button count={count} setCount={setCount}>
          {count}
        </Button>
      </div>
      <button
        className="bg-gray-100 hover:border border-blue-500 py-3 px-6 rounded-lg cursor-pointer"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
}

export default App;

const Button = ({ count, setCount }) => {
  const [currentCount, setCurrentCount] = useState(0);
  useEffect(() => {
    if (count === 1) {
      setCurrentCount(0);
    }
  }, [count]);
  const handleClick = () => {
    if (!currentCount) {
      setCurrentCount(count);
      setCount(count + 1);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`w-12 h-12 border border-black/10 rounded-sm cursor-pointer ${
        currentCount ? "bg-gray-100" : "bg-white"
      }`}
    >
      {currentCount ? currentCount : ""}
    </button>
  );
};
