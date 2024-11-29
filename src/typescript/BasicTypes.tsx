export default function BasicTypes() {
  const name: string = 'Jair Alexander'
  const age: number = 22
  const isMarried: boolean = false

  const people = ['Jair', 'Chris', 'Joha']

  return (<>
    <h1>Tipos Basicos</h1>
    <div>
      Bienvenido {name} con edad : {age} y estado civil {
        isMarried ? <a>Casado</a> : <a>Soltero</a>
      }

      {people.join(',')}
    </div>
  </>
  )
}
