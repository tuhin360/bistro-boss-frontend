// Required imports for queries, auth, secure axios, icons, and Recharts components
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoIosWallet } from "react-icons/io";
import { FaTruck, FaUsers } from "react-icons/fa";
import { PiChefHatFill } from "react-icons/pi";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { RiRectangleFill } from "react-icons/ri";

// Custom colors for charts
const barColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const pieColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;

const AdminHome = () => {
  const { user } = useAuth(); // Get the logged-in user
  const axiosSecure = useAxiosSecure(); // Secure axios instance with JWT

  // Fetch admin stats data from backend
  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  // Fetch order chart data from backend
  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  // Show a spinning loader while loading
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-16 h-16 border-4 border-t-transparent border-purple-500 rounded-full animate-spin shadow-lg"></div>
      </div>
    );
  }

  // Custom triangle shape for Bar chart
  const getPath = (x, y, width, height) => `
    M${x},${y + height}
    C${x + width / 3},${y + height}
     ${x + width / 2},${y + height / 3}
     ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
     ${x + (2 * width) / 3},${y + height}
     ${x + width},${y + height}
    Z`;

  const TriangleBar = ({ fill, x, y, width, height }) => (
    <path d={getPath(x, y, width, height)} fill={fill} />
  );

  // Pie chart label percentage rendering
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Convert order data into pie chart format
  const pieData = chartData.map((data) => ({
    name: data.category,
    value: data.revenue,
  }));

  // Card data with gradient backgrounds
  const statCards = [
    {
      icon: <IoIosWallet className="size-14" />,
      value: stats.revenueAmount,
      label: "Revenue",
      bg: "from-purple-700 via-purple-500 to-pink-400",
    },
    {
      icon: <FaUsers className="size-14" />,
      value: stats.users,
      label: "Customers",
      bg: "from-yellow-400 via-orange-400 to-red-400",
    },
    {
      icon: <PiChefHatFill className="size-14" />,
      value: stats.menuItems,
      label: "Products",
      bg: "from-pink-600 via-pink-400 to-rose-300",
    },
    {
      icon: <FaTruck className="size-14" />,
      value: stats.orders,
      label: "Orders",
      bg: "from-sky-500 via-cyan-400 to-blue-300",
    },
  ];

  // Main return UI
  return (
    <div className="p-4 md:p-6">
      {/* Welcome message */}
      <h2 className="text-2xl font-bold mb-6">
        Hi, Welcome {user?.displayName || "Back"}
      </h2>

      {/* Stat cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((card, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-4 p-4 rounded-2xl shadow-lg text-white bg-gradient-to-br ${card.bg}`}
          >
            {card.icon}
            <div>
              <p className="text-3xl font-bold">{card.value}</p>
              <p>{card.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chart section: Bar and Pie charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-4 rounded-2xl shadow-lg">
        {/* Bar chart */}
        <div>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Bar
                  dataKey="quantity"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={barColors[index % barColors.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center items-center gap-2 mt-4">
            <RiRectangleFill className="size-6 text-blue-500"  />
            Sold
          </div>
        </div>

        {/* Pie chart */}
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={pieColors[index % pieColors.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
