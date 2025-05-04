// src/components/PaymentInfo.js
import React from 'react';

const PaymentInfo = ({ paymentInfo }) => {
  // Check if paymentInfo is defined
  if (!paymentInfo) {
    return <div>Loading payment information...</div>; // Show a loading message or placeholder
  }

  return (
    <div style={styles.paymentInfo}>
      <h2>Payments</h2>
      <p>Total: ${paymentInfo.total.toFixed(2)}</p>
      <p>Pending Orders: ${paymentInfo.pendingOrders.toFixed(2)}</p>
      <p>Payment Details: ${paymentInfo.paymentDetails.toFixed(2)}</p>
      <p>Other Charges: ${paymentInfo.otherCharges.toFixed(2)}</p>
    </div>
  );
};

const styles = {
  paymentInfo: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
};

export default PaymentInfo;