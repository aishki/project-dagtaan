import HeroSection from "../components/home/HeroSection"
import AboutSection from "../components/home/AboutSection"
import ActivitiesPreview from "../components/home/ActivitiesPreview"
import DonorsPreview from "../components/home/DonorsPreview"
import DonationDrivePreview from "../components/home/DonationDrivePreview"
import ContactCTA from "../components/home/ContactCTA"

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ActivitiesPreview />
      <DonorsPreview />
      <DonationDrivePreview />
      <ContactCTA />
    </>
  )
}

export default HomePage

