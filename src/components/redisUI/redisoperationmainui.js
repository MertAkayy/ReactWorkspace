import React from "react";
import "./redisops.css";
import axios from "axios";

function redisops() {
  const connectRedisDB = () => {
    console.log("click");
    axios
      .get("http://localhost:5000/redis/connectredis")
      .then((Response) => {})
      .catch((error) => {
        console.log("Hata" + error);
      }, []);
  };
  const setValue = () => {
    let currentKeyValuepair = {
      key: document.getElementById("Key").value,
      value: document.getElementById("Value").value,
    };
    axios.post("http://localhost:5000/redis/addkeyredis", currentKeyValuepair);
  };
  return (
    <div>
      <button className="connect_Redis_Button" onClick={connectRedisDB}>
        {" "}
        Connect Redis Server
      </button>
      <input
        pattern="[A-Za-z]{3}"
        id="Key"
        type="text"
        placeholder="Enter Key....."
      ></input>
      <input
        pattern="[A-Za-z]{3}"
        id="Value"
        type="text"
        placeholder="Enter Value....."
      ></input>
      <button className="connect_Redis_Button" onClick={setValue}>
        {" "}
        Set Value
      </button>
    </div>
  );
}
export default redisops;
