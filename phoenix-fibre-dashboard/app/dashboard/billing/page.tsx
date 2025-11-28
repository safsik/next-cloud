import React from 'react';
import { useEffect, useState } from 'react';
import { fetchBillingData } from '../../../src/lib/api';
import Card from '../../../app/components/Card';

const BillingPage = () => {
  const [billingData, setBillingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBillingData = async () => {
      try {
        const data = await fetchBillingData();
        setBillingData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getBillingData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Billing Information</h1>
      {billingData && billingData.map((item) => (
        <Card key={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default BillingPage;