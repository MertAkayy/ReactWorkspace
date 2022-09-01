import React from "react";
import "./dbpistolops.css";
import axios from "axios";
const Addpistol = ({ open, onClose }) => {
  const validatetoAdd = () => {
    if (
      document.getElementById("pName").value === "" ||
      document.getElementById("producer_Name").value === "" ||
      document.getElementById("bt_Name").value === "" ||
      document.getElementById("country_Name").value === "" ||
      document.getElementById("year_Name").value === ""
    ) {
      return true;
    } else {
      return false;
    }
  };
  const insertPistol = () => {
    console.log(validatetoAdd());
    if (validatetoAdd() === true) {
      alert("fill in the blank fields.");
    } else {
      const currentPistol = {
        Pistol: document.getElementById("pName").value,
        Producer: document.getElementById("producer_Name").value,
        Bullet_type: document.getElementById("bt_Name").value,
        Country: document.getElementById("country_Name").value,
        Year: document.getElementById("year_Name").value,
      };
      axios.post("http://localhost:5000/api/pistols/", currentPistol);
      onClose();
    }
  };

  if (!open) return null;
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="window">
          <h1>Tabanca Ekle</h1>
          <div className="textfields_div">
            <div className="pistol_field">
              <label>Pistol Name:</label>
              <input
                onBlur={() => {
                  if (/^\s/.test(document.getElementById("pName").value)) {
                    document.getElementById("pName").value = "";
                    document.getElementById("pName").style =
                      "border: 2px solid #f00;";
                  } else {
                    document.getElementById("pName").style =
                      "border: 2px solid rgb(0, 17, 255);";
                  }
                }}
                pattern="[A-Za-z]{3}"
                id="pName"
                type="text"
                name="pistol_name"
                placeholder="Pistol Name....."
              ></input>
            </div>
            <div className="producer_field">
              <label>Producer :</label>
              <input
                onBlur={() => {
                  if (
                    /^\s/.test(document.getElementById("producer_Name").value)
                  ) {
                    document.getElementById("producer_Name").value = "";
                    document.getElementById("producer_Name").style =
                      "border: 2px solid #f00;";
                  } else {
                    document.getElementById("producer_Name").style =
                      "border: 2px solid rgb(0, 17, 255);";
                  }
                }}
                id="producer_Name"
                type="text"
                name="producer"
                placeholder="Producer....."
              ></input>
            </div>
            <div className="bullet_type_field">
              <label>Bullet Type :</label>
              <input
                onBlur={() => {
                  if (/^\s/.test(document.getElementById("bt_Name").value)) {
                    document.getElementById("bt_Name").value = "";
                    document.getElementById("bt_Name").style =
                      "border: 2px solid #f00;";
                  } else {
                    document.getElementById("bt_Name").style =
                      "border: 2px solid rgb(0, 17, 255);";
                  }
                }}
                id="bt_Name"
                type="text"
                name="bullet_type"
                placeholder="Bullet Type....."
              ></input>
            </div>
            <div className="country_field">
              <label>Country :</label>
              <input
                onBlur={() => {
                  if (
                    /^\s/.test(document.getElementById("country_Name").value)
                  ) {
                    document.getElementById("country_Name").value = "";
                    document.getElementById("country_Name").style =
                      "border: 2px solid #f00;";
                  } else {
                    document.getElementById("country_Name").style =
                      "border: 2px solid rgb(0, 17, 255);";
                  }
                }}
                id="country_Name"
                type="text"
                name="country"
                placeholder="Country....."
              ></input>
            </div>
            <div className="year_field">
              <label>Year :</label>
              <input
                id="year_Name"
                type="number"
                name="year"
                placeholder="Year....."
              ></input>
            </div>
          </div>
          <div className="buttons_div">
            <button className="add_Button" onClick={insertPistol}>
              {" "}
              Tabancayı Ekle{" "}
            </button>
            <button onClick={onClose} className="cl_Button">
              {" "}
              Kapat{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Addpistol;
