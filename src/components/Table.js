import satData from "./satData";

const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {satData.map((id, data) =>
        <tr>
          <th key={sat.id}></th>
          <td>{sat.name}</td>
          <td>{sat.type}</td>
          <td>{sat.date}</td>
          <td>{sat.status}</td>
        </tr>
        )}
        </tbody>
      </table>
  );
};

export default Table;