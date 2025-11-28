import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Fetch usage data from your data source (e.g., database, external API)
  const usageData = await fetchUsageData();

  return NextResponse.json(usageData);
}

async function fetchUsageData() {
  // Replace this with your actual data fetching logic
  return {
    totalUsage: 1000,
    peakUsage: 200,
    usageByDevice: [
      { device: 'Router', usage: 500 },
      { device: 'Switch', usage: 300 },
      { device: 'Access Point', usage: 200 },
    ],
  };
}