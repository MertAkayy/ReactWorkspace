import React, { useState } from "react";
import "./redisops.css";
import axios from "axios";

function Redisops() {
  const [personel_docs, setPersonel_docs] = useState([]);

  const connectRedisDB = () => {
    console.log("click");
    axios
      .get("http://localhost:5000/redis/connectredis")
      .then((Response) => {})
      .catch((error) => {
        console.log("Hata" + error);
      }, []);
  };
  const TableRow = ({ item, column }) => (
    <tr>
      {column.map((columnItem, index) => {
        return <td>{item[columnItem.value]}</td>;
      })}
    </tr>
  );
  const setValue = () => {
    let currentKeyValuepair = {
      key: document.getElementById("Key").value,
      value: document.getElementById("Value").value,
    };
    axios.post("http://localhost:5000/redis/addkeyredis", currentKeyValuepair);
  };
  const getValue = () => {
    axios
      .get("http://localhost:5000/redis/getallpersons")
      .then((Response) => {
        console.log(Response.data);
        setPersonel_docs(Response.data.persons);
      })
      .catch((error) => {
        console.log("Hata" + error);
      }, []);
    const TableRow = ({ item, column }) => (
      <tr>
        {column.map((columnItem, index) => {
          return <td>{item[columnItem.value]}</td>;
        })}
      </tr>
    );
  };
  const column = [
    { heading: "İsim", value: "name", unique: "false" },
    { heading: "Soyisim", value: "surname", unique: "false" },
    { heading: "TC No", value: "tcno", unique: "false" },
    { heading: "Sicil No", value: "regno", unique: "false" },
    { heading: "Rütbe", value: "rank", unique: "false" },
  ];
  return (
    <div id="main_div">
      <button className="connect_Redis_Button" onClick={connectRedisDB}>
        {" "}
        Connect Redis Server
      </button>

      <button className="connect_Redis_Button" onClick={getValue}>
        {" "}
        Get All Persons
      </button>

      <table>
        <thead>
          <th> İsim</th>
          <th> Soyisim</th>
          <th> TC No</th>
          <th> Sicil No</th>
          <th> Rütbe</th>
        </thead>
        <tbody>
          {personel_docs.map((item, index) => (
            <TableRow item={item} column={column} />
          ))}
        </tbody>
      </table>
      <button className="Add_Redis_Button" onClick={getValue}>
        {" "}
        Insert Person
      </button>
      <button className="Delete_Redis_Button" onClick={getValue}>
        {" "}
        Delete Person
      </button>
      <button className="Update_Redis_Button" onClick={getValue}>
        {" "}
        Update Person
      </button>
    </div>
  );
}
export default Redisops;
