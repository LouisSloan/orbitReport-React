import satData from "./satData";

const Buttons = (props) => {
  {(props.displaySats).map((sat, id) => {
    return (
      <button onClick={() => props.filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    );
  })}
   <button onClick={() => props.setSat} setSat={satData}></button>
};

export default Buttons;