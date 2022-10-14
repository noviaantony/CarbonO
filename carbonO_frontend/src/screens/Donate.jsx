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
      <div className="mx-32">
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

        <DonationCard
          Title="Union of Concerned Scientists: Using Science to Make Change Happen"
          Description="a group of scientists and students at the Massachusetts Institute of Technology, as they were appalled at the way the American government dealt with Cleveland’s heavily polluted Cuyahoga River during the Vietnam War. Today, the charity is fighting for a safer and healthier world through scientific innovation."
          Image="https://www.ucsusa.org/sites/default/files/styles/original/public/2020-01/home-hero-signing.jpg?itok=HMVB3mWA"
          Website="https://www.ucsusa.org/"
        />

        <DonationCard
          Title="Cool Earth: Protecting the World’s Rainforests"
          Description="charity is dedicated to addressing climate change through the protection of rainforests, by giving control back to the people who live in them"
          Image="https://856366.smushcdn.com/2556047/wp-content/uploads/2022/09/AdobeStock__307657351-1024x683.jpeg?lossy=0&strip=1&webp=1"
          Website="https://www.coolearth.org/"
        />
      </div>
    </div>
  );
}

export default Donate
