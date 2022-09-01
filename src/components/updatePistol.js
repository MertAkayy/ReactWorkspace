import "./dbpistolops.css";
import axios from "axios";
import React from "react";
let Pistols = [];
var currentPistol;
var firstOpen = true;
const Updatepistol = ({ open, onClose }) => {
  axios
    .get("http://localhost:5000/api/pistols")
    .then((Response) => {
      Pistols = Response.data;
      if (firstOpen === true) {
        document.getElementById("pName_update").value = Pistols[0].Pistol;
        document.getElementById("producer_Name_update").value =
          Pistols[0].Producer;
        document.getElementById("bt_Name_update").value =
          Pistols[0].Bullet_type;
        document.getElementById("country_Name_update").value =
          Pistols[0].Country;
        document.getElementById("year_Name_update").value = Pistols[0].Year;
        currentPistol = Pistols[0];
        firstOpen = false;
      }
    })
    .catch((error) => {
      console.log("Hata" + error);
    }, []);

  const changeStatusSelect = () => {
    for (var key in Pistols) {
      if (
        Pistols[key]._id === document.getElementById("pistols_dropdown").value
      ) {
        currentPistol = Pistols[key];
        break;
      }
    }
    document.getElementById("pName_update").value = currentPistol.Pistol;
    document.getElementById("producer_Name_update").value =
      currentPistol.Producer;
    document.getElementById("bt_Name_update").value = currentPistol.Bullet_type;
    document.getElementById("country_Name_update").value =
      currentPistol.Country;
    document.getElementById("year_Name_update").value = currentPistol.Year;
  };
  const updatePistol = () => {
    const updatedPistol = {
      Pistol: document.getElementById("pName_update").value,
      Producer: document.getElementById("producer_Name_update").value,
      Bullet_type: document.getElementById("bt_Name_update").value,
      Country: document.getElementById("country_Name_update").value,
      Year: document.getElementById("year_Name_update").value,
    };

    axios.put(
      "http://localhost:5000/api/pistols/" + currentPistol._id,
      updatedPistol
    );
    console.log("Update");
    console.log(currentPistol);
    console.log("http://localhost:5000/api/pistols/" + currentPistol._id);
    onClose();
  };
  if (!open) return null;

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="window">
          <h1>Tabancayı Güncelle</h1>
          <select id="pistols_dropdown" onChange={changeStatusSelect}>
            {Pistols.map((item) => {
              return (
                <option key={item.Pistol} value={item._id}>
                  {item.Pistol}
                </option>
              );
            })}
          </select>
          <div className="textfields_div">
            <div className="pistol_field">
              <label>Pistol Name:</label>
              <input
                pattern="[A-Za-z]{3}"
                id="pName_update"
                type="text"
                name="pistol_name"
                placeholder="Pistol Name....."
              ></input>
            </div>
            <div className="producer_field">
              <label>Producer :</label>
              <input
                id="producer_Name_update"
                type="text"
                name="producer"
                placeholder="Producer....."
              ></input>
            </div>
            <div className="bullet_type_field">
              <label>Bullet Type :</label>
              <input
                id="bt_Name_update"
                type="text"
                name="bullet_type"
                placeholder="Bullet Type....."
              ></input>
            </div>
            <div className="country_field">
              <label>Country :</label>
              <input
                id="country_Name_update"
                type="text"
                name="country"
                placeholder="Country....."
              ></input>
            </div>
            <div className="year_field">
              <label>Year :</label>
              <input
                id="year_Name_update"
                type="number"
                name="year"
                placeholder="Year....."
              ></input>
            </div>
          </div>
          <div className="buttons_div">
            <button className="delete_Button" onClick={updatePistol}>
              {" "}
              Tabancayı Güncelle{" "}
            </button>
            <button
              onClick={() => {
                onClose();
                firstOpen = true;
              }}
              className="cl_Button"
            >
              {" "}
              Kapat{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Updatepistol;
