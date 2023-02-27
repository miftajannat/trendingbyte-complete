import React from "react";
import BasicPricing from "./basicpricing";
import StandardPricing from "./standardpricing";
import EcommercePricing from "./ecommercepricing";

const Pricing = () => {
  return (
    <section class="pt-20 overflow-hidden">
      <div class="container mx-auto">
        <div class="md:max-w-lg mx-auto text-center mb-8">
          <h2 class="mb-4 font-heading font-semibold text-blue-500 text-6xl sm:text-7xl">
            Our Pricing
          </h2>
          <p class="text-lg text-gray-400">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 ">
          <BasicPricing />
          <EcommercePricing />
          <StandardPricing />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
