import MainNavbar from "@/components/navbars/MainNavbar"
import Footer from "@/components/Footer"

export default function MainLayout({ children }) {
  return (
    <>
      <MainNavbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
