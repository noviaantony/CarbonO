import React from 'react'
import Header from "../components/misc/Header";
import DonationCard from "../components/donate/DonationCard";


const Donate = () => {
  return (
    <div>
      <Header
        Title="Translate Your Efforts Into More Effort!"
        Description="use the e-credits you earned to donate to climate change campaigns, we make donating easy for you."
      />
      {/* charities from: https://impactful.ninja/best-charities-for-climate-change/ */}
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <DonationCard
            Title="Cool Earth: Protecting the World’s Rainforests"
            Description="enact federal policy that would force older coal plants in America to improve their emissions. Today, the charity is a global non-profit organization that works to safeguard against the worst impacts of climate change. "
            Image="https://856366.smushcdn.com/2556047/wp-content/uploads/2022/09/AdobeStock__307657351-1024x683.jpeg?lossy=0&strip=1&webp=1"
            Website="https://www.coolearth.org/"
          />

          <DonationCard
            Title="Clean Air Task Force: Reducing Carbon Emissions"
            Description="charity is dedicated to addressing climate change through the protection of rainforests, by giving control back to the people who live in them"
            Image="https://856366.smushcdn.com/2556047/wp-content/uploads/2022/09/AdobeStock__307657351-1024x683.jpeg?lossy=0&strip=1&webp=1"
            Website="https://www.catf.us/"
          />

          
        </div>
      </div>
    </div>
  );
}

export default Donate
