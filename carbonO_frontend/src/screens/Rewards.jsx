import React from 'react'
import RewardCard from "../components/rewards/RewardCard";


const Rewards = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row mx-32 mt-12"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 1
                  ? "text-white bg-[#5E9387]"
                  : "text-grey-700 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Clothing
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 2
                  ? "text-white bg-[#5E9387]"
                  : "text-grey-700 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Food
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 3
                  ? "text-white bg-[#5E9387]"
                  : "text-grey-700 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              Transportation
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              {/*  */}
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div class="grid grid-cols-2 gap-2 mx-32 mt-7">
                  <RewardCard
                    RewardImage="https://cf.shopee.sg/file/298ee1b825e1550a9d8c02fc0822745b"
                    RewardTitle="Assorted Thrifted Windbreakers"
                    RewardDescription="enjoy a 30% off vintage windbreakers by vintagewknd"
                    CompanyName="Vintagewknd"
                    CompanyWebsite="https://vintagewknd.com/"
                    Comp
                  />
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div class="grid grid-cols-2 gap-2 mx-32 mt-7">
                  <RewardCard
                    RewardImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZrS6jolKfZU3vWBbytwy5in6ycTcF_AWaiA&usqp=CAU"
                    RewardTitle="Aritsan Loungewear"
                    RewardDescription="enjoy a 10% off loung wear from NOST"
                    CompanyName="NOST"
                    CompanyWebsite="https://www.nostshop.com/"
                  />
                  <RewardCard
                    RewardImage="https://cdn.shopify.com/s/files/1/1543/3741/products/Frankitas-Mini-Koko-Rangrang-in-Brown-handbag-sustainable-fashion-zerrin3_540x.png?v=1665646398"
                    RewardTitle="Frankintas Koko Bag"
                    RewardDescription="redeem a free bag from Muta Wear"
                    CompanyName="Muta Wear"
                    CompanyWebsite="https://zerrin.com/directory_listing/muta-wear/"
                  />
                  <RewardCard
                    RewardImage="https://cdn.shopify.com/s/files/1/0070/3204/5658/products/IMG_1259_470x.jpg?v=1649252221"
                    RewardTitle="Reversible Slip-on Pet Barkdana"
                    RewardDescription="redeem a free pet collar barkdana from aNERDtore"
                    CompanyName="aNERDtore"
                    CompanyWebsite="https://anerdstorebatik.com/"
                  />
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div class="grid grid-cols-2 gap-2 mx-32 mt-7">
                  <RewardCard
                    RewardImage="https://cdn.shopify.com/s/files/1/0076/6977/6461/products/Indosole-2019-mens-green-flipflop-hang-SQ_600x.jpg?v=1664940439"
                    RewardTitle="Men's Flip Flops"
                    RewardDescription="enjoy 20% off flip flops from indoSole"
                    CompanyName="indoSole"
                    CompanyWebsite="https://indosole.com.sg/"
                  />
                  <RewardCard
                    RewardImage="https://cdn.shopify.com/s/files/1/0071/4974/8282/products/MandaContrastEarrings_Brass_Jewellery_Kenya_1_800x.jpg?v=1655911896"
                    RewardTitle="Women's Jewellery"
                    RewardDescription="enjoy 80% off jewellery from Artisan and Fox"
                    CompanyName="Artisan and Fox"
                    CompanyWebsite="https://artisanandfox.com/"
                  />
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Rewards;


