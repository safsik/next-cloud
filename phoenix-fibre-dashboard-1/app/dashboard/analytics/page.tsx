import React from 'react';
import { LineChart } from '@/app/components/charts/LineChart';
import { BarChart } from '@/app/components/charts/BarChart';
import Card from '@/app/components/Card';

const AnalyticsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="User Growth">
          <LineChart />
        </Card>
        <Card title="Revenue Overview">
          <BarChart />
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage;