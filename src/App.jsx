import { useState } from "react";
import "./App.css";
import Watch from "./Components/Watch/Watch";
import { useEffect } from "react";

function App() {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Hanifc56/Watches-data-test/main/watches.json"
    )
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  // useEffect(() => {
  //   fetch("watches.json")
  //     .then((res) => res.json())
  //     .then((data) => setWatches(data));
  // }, []);

  // OPtion-1:

  // const watches = [
  //   { id: 1, name: "Apple watch", price: 200 },
  //   { id: 2, name: "Samsu watch", price: 200 },
  //   { id: 3, name: "MIa watch", price: 200 },
  // ];

  // Option-2:

  // const watches = [
  //   { id: 1, name: "Apple Watch Series 7", price: 399.99 },
  //   { id: 2, name: "Galaxy Watch 4", price: 249.99 },
  //   { id: 3, name: "Fitbit Sense", price: 299.95 },
  //   { id: 4, name: "Garmin Venu 2", price: 399.99 },
  //   { id: 5, name: "Huawei Watch GT 3", price: 229.99 },
  // ];

  return (
    <>
      <h1>Smart Accssories</h1>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
