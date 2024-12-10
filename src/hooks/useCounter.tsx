import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);
  const handleClickPlus = () => {
    setCount((currentCount) => currentCount + 1);
  };
  const handleClickMin = () => {
    setCount((currentCount) => currentCount - 1);
  };
  return { count, handleClickMin, handleClickPlus };
}
