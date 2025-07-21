import { useEffect, useState } from "react";
import axios from "axios";

const AdminStats = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
     console.log("Using token:", token);
    axios.get("http://localhost:8080/admin/stats", {
      headers: {
        Authorization: `Bearer ${token}`, // ✅ THIS LINE IS CRITICAL
      },
    })
    .then((res) => setStats(res.data))
    .catch((err) => {
      console.error("Failed to fetch stats:", err);
      setError("Failed to fetch stats.");
    });
  }, []);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!stats) return <p>Loading stats...</p>;

  return (
    <div>
      <h2>Admin Stats</h2>
      <p>Total FAQs: {stats.totalFaqs}</p>

      <h3>Categories</h3>
      <ul>
        {Object.entries(stats.categoryCounts).map(([category, count]) => (
          <li key={category}>{category}: {count}</li>
        ))}
      </ul>

      <h3>Tags</h3>
      <ul>
        {Object.entries(stats.tagCounts).map(([tag, count]) => (
          <li key={tag}>{tag}: {count}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminStats;
