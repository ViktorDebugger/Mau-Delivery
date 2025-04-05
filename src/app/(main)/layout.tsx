import Header from "@/components/Header";


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <Header />
      {children}
    </div>
  );
}
