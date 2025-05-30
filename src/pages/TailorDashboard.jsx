import { useEffect, useState } from "react";
/*import EarningsCard from "../components/pages/tailor/EarningsCard";
import PendingOrdersList from "../components/pages/tailor/PendingOrdersList";*/

export default function TailorDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with actual API calls
        const statsResponse = await fetch("/api/tailor/stats");
        const statsData = await statsResponse.json();
        setStats(statsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tailor Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/*<EarningsCard
          title="This Month"
          amount={stats?.currentMonthEarnings}
          change={stats?.earningsChange}
        />*/}
        {/* Other cards */}
      </div>

      {/*<PendingOrdersList orders={stats?.pendingOrders} />*/}
    </div>
  );
}
