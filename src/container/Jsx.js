let name = "Rama";
const users = [
  { name: "Aman", age: 21 },
  { name: "Subhash", age: 23 },
  { name: "Ankit", age: 21 },
];
function checkEvenorOdd(num) {
  if (num % 2 === 0) {
    return <div>Even</div>;
  } else {
    return <div>Odd</div>;
  }
}
function chk_letter(l) {
  switch (l) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return <div>{l} is Vowel</div>;
      break;

    default:
      return <div>{l} is Consonant</div>;
  }
}

let num = 4;
function Jsx() {
  return (
    <div>
      <h2>Hello {name}</h2>

      <div>
        <h2>If Else Statement</h2>
        {checkEvenorOdd(5)}
        {num % 2 == 0 ? (
          <div>The number is even.</div>
        ) : (
          <div>The number is odd.</div>
        )}
        <h3>If Statement</h3>
        {num % 2 == 0 && <div>Even Number</div>}
        {num % 2 !== 0 && <div>Odd Number</div>}
      </div>

      <h3>Loop</h3>
      {users.map((item, index) => {
        return (
          <div key={index}>
            {item.name} - {item.age}
          </div>
        );
      })}

      {chk_letter("a")}
    </div>
  );
}

export default Jsx;

