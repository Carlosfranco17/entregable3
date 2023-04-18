import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./helpers/random";
import axios from "axios";
import Location from "./components/Location";
import ResidenList from "./components/ResidenList";


function App() {
  const [location, setLocation] = useState();

  const haandleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.locationId.value;

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (

    
    <div className="App bg-[url('/public/img/fondo.png')] min-h-screen mx-0 min-h-screen">


<article className=" flex justify-center ">

<div className=" absolute translate-y-[-50%]  flex justify-center">

  <img className="animate-spin-slow w-[700px] " src="/img/portal.png" alt="" />
</div>

<div className="">

  <img className="translate-y-[200%] translate-x-[2%] animate-pulse" src="/img/nombre1.png" alt="" />

</div>
</article>


      <form className="flex  flex-col justify-center items-center" onSubmit={haandleSubmit} action="">


        <div className="bg-white mt-[300px] border-2 border-orange-400 rounded-full w-80% h-[45px] sm:w-[600px] flex mt-[420px]"> 
          <input
          id="locationId"
          placeholder="Type a location id ..."
          className="border-0 bg-white px-3  x-auto py-2 rounded-full focus:outline-none w-full"
          type="text"
        />
          <button className=" text-white font-bold bg-orange-400 py-2 rounded-full px-6  ">
          Search <i className="-translate-x-[-40px] -translate-y-[20px] bx bx-search-alt-2"></i>
        </button>
        </div>
      

        <h2 className="text-white mt-20 text-3xl font-bold">Welcome to the crazy universe!</h2>
      </form>

      <Location location={location} />

      <ResidenList location={location} /> 
    </div>
  );
}

export default App;
