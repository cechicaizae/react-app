const addTwoNumber = (firstNumber: number, secondNumber: number): number => {
    return firstNumber + secondNumber
}

export default function BasicFunctions() {
    return (
        <>
            <h3>Funciones</h3>
            <span>
                El resultado de la suma es {addTwoNumber(1, 6)}
            </span>
        </>
    )
}
