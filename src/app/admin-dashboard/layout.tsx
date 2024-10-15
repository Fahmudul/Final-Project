import AdminBar from "@/Components/AdminBar";
export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AdminBar />
      {children}
    </div>
  );
}
