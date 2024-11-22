import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function GoalLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  if (!accessToken) {
    redirect("/login");
  }

  return (
    <SidebarProvider>
      <div className="w-full h-full">{children}</div>
    </SidebarProvider>
  );
}