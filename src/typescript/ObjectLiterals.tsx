interface Person {
    age: number,
    firstName: string,
    lastName: string,
    adress: Adress
}

interface Adress {
    country: string,
    houseNo: number
}

export default function ObjectLiterals() {
    const person: Person = {
        age: 22,
        firstName: 'Jair',
        lastName: 'Guanotoa',
        adress: {
            country: 'Ecuador',
            houseNo: 2971
        }
    }
    return (
        <>
            <h3>

                Objetos
                {JSON.stringify(person, null, 2)}
            </h3>
        </>
    )
}
