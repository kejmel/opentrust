export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <h1 className="flex justify-center text-white">Part of layout</h1>
        <nav></nav>
   
        {children}
      </section>
    )
  }