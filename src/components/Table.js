
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
        {sat.map((data, id) =>
        <tr>
          <th key={sat.id}></th>
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.date}</td>
          <td>{data.status}</td>
        </tr>
        )}
        </tbody>
      </table>
  );
};

export default Table;