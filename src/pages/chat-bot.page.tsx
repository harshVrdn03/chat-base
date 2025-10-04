import { DataTable, type Column } from "@/components/common";
import { useNavigate } from "react-router-dom";

interface ChatBot {
  id: string;
  name: string;
  status: "Active" | "Inactive";
  createdDisplay: string;
  totalUsers: number;
}

const mockData: ChatBot[] = [
  {
    id: "cb-001",
    name: "SupportBot",
    status: "Active",
    createdDisplay: "Sep 21, 2025",
    totalUsers: 1432,
  },
  {
    id: "cb-002",
    name: "Sales Assistant",
    status: "Inactive",
    createdDisplay: "Aug 12, 2025",
    totalUsers: 289,
  },
  {
    id: "cb-003",
    name: "Survey Bot",
    status: "Active",
    createdDisplay: "Jul 05, 2025",
    totalUsers: 910,
  },
  {
    id: "cb-004",
    name: "FAQ Helper",
    status: "Active",
    createdDisplay: "Jun 18, 2025",
    totalUsers: 2156,
  },
  {
    id: "cb-005",
    name: "Booking Agent",
    status: "Inactive",
    createdDisplay: "May 30, 2025",
    totalUsers: 478,
  },
  {
    id: "cb-006",
    name: "Product Guide",
    status: "Active",
    createdDisplay: "Apr 22, 2025",
    totalUsers: 1823,
  },
  {
    id: "cb-007",
    name: "Feedback Collector",
    status: "Active",
    createdDisplay: "Mar 14, 2025",
    totalUsers: 654,
  },
  {
    id: "cb-008",
    name: "Order Tracker",
    status: "Inactive",
    createdDisplay: "Feb 08, 2025",
    totalUsers: 123,
  },
  {
    id: "cb-009",
    name: "HR Assistant",
    status: "Active",
    createdDisplay: "Jan 25, 2025",
    totalUsers: 789,
  },
  {
    id: "cb-010",
    name: "Marketing Bot",
    status: "Active",
    createdDisplay: "Dec 19, 2024",
    totalUsers: 3421,
  },
  {
    id: "cb-011",
    name: "Tech Support",
    status: "Inactive",
    createdDisplay: "Nov 11, 2024",
    totalUsers: 567,
  },
  {
    id: "cb-012",
    name: "Onboarding Guide",
    status: "Active",
    createdDisplay: "Oct 03, 2024",
    totalUsers: 1998,
  },
];

export function ChatBotPage() {
  const navigate = useNavigate();

  const columns: Column<ChatBot>[] = [
    {
      key: "name",
      header: "Chatbot",
      className: "min-w-[200px]",
      render: (row) => (
        <div>
          <div className="font-medium text-gray-900">{row.name}</div>
          <div className="text-xs text-gray-500">{row.id}</div>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (row) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            row.status === "Active"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      key: "createdDisplay",
      header: "Created",
      cellClassName: "whitespace-nowrap text-gray-700",
    },
    {
      key: "totalUsers",
      header: "Total Users",
      className: "whitespace-nowrap text-gray-700",
      render: (row) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium `}
        >
          {row.totalUsers.toLocaleString()}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-6 lg:px-4 px-2 py-2">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Chatbot Directory</h1>
        <p className="text-muted-foreground">
          Manage deployment status, monitor engagement, and open detailed user
          insights.
        </p>
      </div>

      <DataTable<ChatBot>
        data={mockData}
        columns={columns}
        pageSize={3}
        onRowClick={(row) => navigate(`/chat-bot/${row.id}/users`)}
        sortable={true}
        paginated={true}
        tableContainerClassName="max-h-[calc(100vh-270px)] sm:max-h-[calc(100vh-220px)] shadow-none"
      />
    </div>
  );
}
