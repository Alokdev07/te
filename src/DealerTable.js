// src/components/DealerTable.js
import React from 'react';

const DealerTable = ({ dealers }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th>Dealer Name</th>
          <th>Location</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {dealers.map((dealer) => (
          <tr key={dealer.id}>
            <td>{dealer.name}</td>
            <td>{dealer.location}</td>
            <td>{dealer.status}</td>
            <td style={getStatusStyle(dealer.status)}>{dealer.status}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};


const getStatusStyle = (status) => ({
  color: status === "Active" ? "green" : "red",
  fontWeight: "bold",
});
const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  th: {
    backgroundColor: '#f2f2f2',
    padding: '10px',
  },
  td: {
    padding: '10px',
    textAlign: 'left',
  },
};

export default DealerTable;