import React from "react";
import Image from "next/image";
import basicPricingData from "@/data/basicpricingdata";

const BasicPricing = () => {
  return (
    <section class="pt-20 overflow-hidden">
      <div className="box-border border-1 border-gray-600 rounded-xl  bg-gray-800 p-5 hover:bg-gray-900 hover:border-2 hover:shadow-md">
        <div className="flex flex-col">
          <div className="flex justify justify-between">
            <div className="flex flex-col">
              <p className="text-2xl font-bold text-white">Business</p>
              <p className="text-2xl font-bold text-white">Basic</p>
            </div>
            <button className="bg-blue-400 rounded-full px-4 h-[35px]">
              Regular
            </button>
          </div>
          <p className=" text-gray-400 py-5 text-6xl font-bold text-center">
            ৳ 18,900
          </p>
          <hr className=" border-gray-600 py-4 border-solid" />
          <h1 className="text-white pb-4">What you get:</h1>
          <div className="flex flex-col">
            {basicPricingData.map((price) => (
              <div key={price.id}>
                <ul className="pl-4">
                  <li className="flex">
                    <Image
                      src={price.image}
                      width={20}
                      height={20}
                      alt="check"
                    />
                    <p className="pl-2 text-gray-500">{price.feature}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicPricing;
