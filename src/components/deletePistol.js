import "./dbpistolops.css";
import axios from "axios";
let Pistols = [];
const Deletepistol = ({ open, onClose }) => {
  axios
    .get("http://localhost:5000/api/pistols")
    .then((Response) => {
      Pistols = Response.data;
      console.log(Pistols[3]._id);
    })
    .catch((error) => {
      console.log("Hata" + error);
    }, []);
  const deletePistol = () => {
    console.log("dELETE");
    var select = document.getElementById("pistols_dropdown");
    var value = select.options[select.selectedIndex].value;
    console.log(value);

    axios.delete("http://localhost:5000/api/pistols/" + value);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="window">
          <h1>Tabanca Sil</h1>
          <select id="pistols_dropdown">
            {Pistols.map((item) => {
              return (
                <option key={item.Pistol} value={item._id}>
                  {item.Pistol}
                </option>
              );
            })}
          </select>
          <div className="buttons_div">
            <button className="delete_Button" onClick={deletePistol}>
              {" "}
              Tabancayı Sil{" "}
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
export default Deletepistol;
