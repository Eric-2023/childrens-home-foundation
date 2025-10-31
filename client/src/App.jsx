import CurrentActivity from "./components/CurrentActivity"
import DonationImpactCalculator from "./components/DonationCalculator"
import Footer from "./components/Footer"
import FoundationPrograms from "./components/FoundationPrograms"
import VirtualTourGallery from "./components/Gallery"
import Header from "./components/Header"
import KIINGAHero from "./components/Hero"
import ChildrensHomeHero from "./components/Hero"
import UrgentNeedsMeter from "./components/NeedsMeter"
import DonationTicker from "./components/RealtimeDonation"
import ChildSponsorshipGallery from "./components/SponsorshipGallery"
import VisitScheduling from "./components/Visits"

function App() {

  return (
    <>
    <Header/>
    <ChildrensHomeHero/>
    <CurrentActivity />
    <UrgentNeedsMeter/>
    <Footer/>
    </>
  )
}

export default App
