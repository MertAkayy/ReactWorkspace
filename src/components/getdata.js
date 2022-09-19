import React, { useState } from "react";
import axios from "axios";
import "./getdata.css";
import Addpistol from "./addpistol.js";
import Deletepistol from "./deletePistol.js";
import Updatepistol from "./updatePistol.js";
import logo from "../resources/yacs_logo.png";
function Pistols() {
  const [pistol_docs, setPistols_docs] = useState([]);
  const [pistolAddtriggered, setpistolAddtriggered] = useState(false);
  const [pistolDeletetriggered, setpistolDeletetriggered] = useState(false);
  const [pistolUpdatetriggered, setpistolUpdatetriggered] = useState(false);

  const getPistols = () => {
    axios
      .get("http://localhost:5000/api/pistols")
      .then((Response) => {
        setPistols_docs(Response.data);
      })
      .catch((error) => {
        console.log("Hata" + error);
      }, []);
  };
  getPistols();
  const TableRow = ({ item, column }) => (
    <tr>
      {column.map((columnItem, index) => {
        return <td>{item[columnItem.value]}</td>;
      })}
    </tr>
  );
  const setPopuptoggleAdd = () => {
    setpistolAddtriggered(!pistolAddtriggered);
  };
  const setPopuptoggleDelete = () => {
    setpistolDeletetriggered(!pistolDeletetriggered);
  };
  const setPopuptoggleUpdate = () => {
    setpistolUpdatetriggered(!pistolUpdatetriggered);
  };
  const column = [
    { heading: "TABANCA", value: "Pistol", unique: "false" },
    { heading: "ÜRETİCİ", value: "Producer", unique: "false" },
    { heading: "FİŞEK", value: "Bullet_type", unique: "false" },
    { heading: "ÜLKE", value: "Country", unique: "false" },
    { heading: "YIL", value: "Year", unique: "false" },
  ];
  return (
    <div>
      <div className="title_div">
        <h1 className="title">Veri Yönetimi-Silah </h1>
        <img src={logo} alt="Logo" />
      </div>
      <Addpistol
        open={pistolAddtriggered}
        onClose={() => setpistolAddtriggered(false)}
      ></Addpistol>
      <Deletepistol
        open={pistolDeletetriggered}
        onClose={() => setpistolDeletetriggered(false)}
      ></Deletepistol>
      <Updatepistol
        open={pistolUpdatetriggered}
        onClose={() => setpistolUpdatetriggered(false)}
      ></Updatepistol>
      <div id="buttons_div">
        <button onClick={getPistols}>Tabancaları Göster</button>
        <button onClick={setPopuptoggleAdd}>Tabanca Ekle</button>
        <button onClick={setPopuptoggleDelete}>Tabanca Sil</button>
        <button onClick={setPopuptoggleUpdate}>Tabanca Güncelle</button>
      </div>
      <table>
        <thead>
          <th> TABANCA</th>
          <th> ÜRETİCİ</th>
          <th> FİŞEK</th>
          <th> ÜLKE</th>
          <th> YIL</th>
        </thead>
        <tbody>
          {pistol_docs.map((item, index) => (
            <TableRow item={item} column={column} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pistols;
