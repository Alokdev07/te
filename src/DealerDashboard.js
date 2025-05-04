// src/components/DealerDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import DealerTable from './DealerTable';
import PaymentInfo from './PaymentInfo';
import MapComponent from './MapComponent';

const DealerDashboard = () => {
  const [dealers, setDealers] = useState([]);
  const paymentInfo = { // Make paymentInfo a constant if it doesn't change
    total: 3480.00,
    pendingOrders: 580.00,
    paymentDetails: 568.00,
    otherCharges: 188.00,
  };

  useEffect(() => {
    const fetchDealers = async () => {
      try {
        const response = await axios.get('http://localhost/dealer-dashboard/backend/fetch_dealers.php');
        setDealers(response.data);
      } catch (error) {
        console.error("Error fetching dealers:", error);
      }
    };

    fetchDealers();
  }, []);

  return (
    <div style={styles.container}>
      <Header />
      <section style={styles.activeDealers}>
        <h2>Active Dealers</h2>
        <MapComponent />
        <DealerTable dealers={dealers} />
      </section>
      <PaymentInfo paymentInfo={paymentInfo} /> {/* Pass paymentInfo prop */}
      <footer style={styles.footer}>
        <p>Tracking Information</p>
        <div style={styles.trackingInfo}>
          <p>Google Maps</p>
          <p>Razopay Card Info</p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'green',
    minHeight: '100vh',
  },
  activeDealers: {
    marginTop: '20px',
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  trackingInfo: {
    marginTop: '10px',
  },
};

export default DealerDashboard;