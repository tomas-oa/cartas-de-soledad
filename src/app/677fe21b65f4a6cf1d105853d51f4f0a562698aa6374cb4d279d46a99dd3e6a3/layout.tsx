export const dynamic = 'force-dynamic'

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className='bg-[#fffef5] min-w-full'>
      <div className="min-h-screen w-5/6 mx-auto grid place-content-center gap-12 mt-12 ">
        {children}
      </div>
    </section>
  )
}
