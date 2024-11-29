import useCount from "../hooks/useCount"

export default function Counter() {
    const { count, handleClickLess, handleClickPlus } = useCount()

    return (
        <>
            <h3 className="text-2xl">Contador <small className="font-bold">{count}</small></h3>
            <div>
                <button onClick={handleClickPlus} className="p-2 bg-lime-200 rounded-xl mx-2 hover:bg-red-600">+1</button>
                <button onClick={handleClickLess} className="p-2 bg-lime-200 rounded-xl mx-2 hover:bg-red-600">-1</button>
            </div>
        </>
    )
}
