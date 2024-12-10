const addTwoNumbers = (a: number, b: number): number => {
  return a + b;
};

export default function BasicFunctions() {
  return (
    <>
      <h3>FUNCIONES</h3>
      <span> El resultado de la suma es {addTwoNumbers(1, 20)}</span>
    </>
  );
}
