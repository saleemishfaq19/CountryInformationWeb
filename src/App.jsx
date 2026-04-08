import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("Pakistan");
  const [apiV, setapiV] = useState("Islamabad");
  const [img, setImg] = useState("https://flagcdn.com/w320/pk.png");
  const [curr, setCurr] = useState("Pakistani rupee");
  const [reg, setReg] = useState("Asia");
  const[pop,setePop]=useState("75555423")
  const[name,setName]=useState("")
  async function hello() {
    let response = await fetch(`https://restcountries.com/v3.1/name/${value}`);
    let data = await response.json();
    let currencies = data[0].currencies;
    let currencyKey = Object.keys(currencies)[0];
    let symbol = currencies[currencyKey].name;
    console.log(data[0].altSpellings[2]);
    setapiV(data[0].capital[0]);
    setImg(data[0].flags.png);
    setCurr(symbol)
    setReg(data[0].region)
    setePop(data[0].population)
    setName(data[0].altSpellings[1])
  }

  return (
    <>
      <div
        id="container"
        className="flex justify-center item-center flex-col p-5 rounded-2xl bg-gray-800 text-white"
      >
        <div
          id="search"
          className="flex justify-center items-center gap-2 p-2 my-2"
        >
          <input
            className="rounded"
            placeholder="Enter The Country Name"
            type="text"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button className="rounded" onClick={hello}>
            search
          </button>
        </div>
        <div id="info" className="w-max">
          <h1 className=" text-center">{name}</h1>
          <img src={img} />
          <div className="flex justify-start items-center gap-6 my-3 ">
            <h5>Capital: {apiV}</h5>
            <h5>Currency: {curr}</h5>
          </div>
          <div className="flex justify-start items-center gap-6 ">
            <h5>Population: {pop}</h5>
            <h5>Region: {reg}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
