import React from "react";
import Header from "../components/misc/Header";
import DonationCard from "../components/donate/DonationCard";
import GreenSpace from "./GreenSpace.jpeg";
import CleanAir from "./CleanAir.jpeg";
import Technology from "./Technology.jpeg";
import Agriculture from "./Agriculture.jpeg";
const Donate = () => {
  return (
    <>
      <div className="h-max">
        <Header
          Title="Translate Your Efforts Into More Effort!"
          Description="use the e-credits you earned to donate to climate change campaigns, we make donating easy for you."
        />

        <div class="container my-12 mx-auto px-4 md:px-1">
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
              Image={CleanAir}
              Website="https://www.catf.us/"
            />

            <DonationCard
              Title="Depave: Create More Green Spaces For All"
              Description="this charity aims to create more urban green spaces and free the environment from any injustice it has suffered "
              Image={GreenSpace}
              Website="https://depave.org/"
            />

            <DonationCard
              Title="The Carbon Underground: An Agricultural Combat Against Climate Change"
              Description="a driven organisation that seeks to transition to a regenerative argriculture through the focus of sustainable farms and grasslands "
              Image={Agriculture}
              Website="https://thecarbonunderground.org/"
            />

            <DonationCard
              Title="WattTime: Leveraging Technology to Save the Environment"
              Description="this organisation designs Automated Emissions Reduction solutions to empower all users to choose clean energy"
              Image={Technology}
              Website="https://www.watttime.org/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
