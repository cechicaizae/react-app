interface Person {
  age?: number;
  firstName: string;
  lastName: string;
  address: {
    country: string;
    houseNo: number;
  };
}

export default function ObjectLiterals() {
  const person: Person = {
    //age:22,
    firstName: "Christian",
    lastName: "Chicaiza",
    address: {
      country: "Ecuador",
      houseNo: 1059,
    },
  };

  return (
    <>
      <h3>OBJETO</h3>
      {JSON.stringify(person, null, 2)}
    </>
  );
}
