export default function BasicTypes() {

    const name: string = 'Christian Chicaiza';
    const age: number = 22;
    const isActive: boolean = false;
    const people = ['Christian', 'Jorge', 'Jair'];
    return (
    <>

    <h3>TIPOS BASICOS</h3>
    {name} - {age} - {isActive? 'Activo' : 'No activo'} - {people.join(', ')}
    </>
  )
}
