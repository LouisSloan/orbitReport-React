import satData from "./satData";
import App from "../App";
import filterByType from "../App";
import setSat from "../App";
import displaySats from "../App";


const Buttons = () => {
  {displaySats.map((sat,id) => {
    return (
      <div>
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
      <button onClick={() => setSat} setSat={satData}></button>
      </div>
    )
  }
    )};
};

export default Buttons;