import useCounter from "../hooks/useCounter";

export default function Counter() {
  const { count, handleClickPlus, handleClickMin } = useCounter();

  return (
    <>
      <h3 className="text-2xl">CONTADOR {count}</h3>
      <div>
        <button
          onClick={() => handleClickPlus()}
          className="p-2 bg-blue-400 rounded-xl mx-2 text-white hover:bg-red-600"
        >
          -1
        </button>
        <button
          onClick={() => handleClickMin()}
          className="p-2 bg-blue-200 rounded-xl mx-2 text-white hover:bg-blue-600"
        >
          +1
        </button>
      </div>
    </>
  );
}
