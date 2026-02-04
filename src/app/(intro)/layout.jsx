import IntroNavbar from "@/components/navbars/IntroNavbar"
import Footer from "@/components/Footer"

export default function IntroLayout({ children }) {
  return (
    <>
      <IntroNavbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
