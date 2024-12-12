import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function NoteCreateLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="w-full h-full bg-[#F1F5F9] rounded-lg dark:bg-black">{children}</div>
    </SidebarProvider>
  );
}
