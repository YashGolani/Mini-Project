import TableRow from "./TableRow";

const Table = ({ contacts, handleDeleteClick }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Company</th>
        <th>Status</th>
        <th>Notes</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {contacts.map((contact) => (
        <TableRow
          key={contact.id}
          contact={contact}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </tbody>
  </table>
);

export default Table;
