import "./styles.css";

let date = new Date();
let currTime = date.getHours();
let greeting;
let style;
if (currTime > 12) {
  greeting = "Good Morning";
  style = { color: "red" };
} else if (currTime < 18) {
  greeting = "Good Afternone";
  style = { color: "yellow" };
} else {
  greeting = "Good Night";
  style = { color: "blue" };
}

export default function App() {
  return (
    <div className="App">
      <h1 style={style}>{greeting}</h1>
    </div>
  );
}
