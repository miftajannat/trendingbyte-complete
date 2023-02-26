import React from "react";
import Image from "next/image";
import ecommercePricingData from "@/data/ecommercepricingdata";


const Pricing = () => {
  return (
    <section class="pt-20 overflow-hidden">
      <div class="container mx-auto">

        <div className="grid">
          {/* map */}
          {ecommercePricingData.map((price) => (
          
              <div key={price.id}>
                <div className="box-border border-1 border-gray-600 rounded-xl  bg-gray-800">
                  <div className="p-5">
                    <div className="flex flex-col">
                      <p className="justify justify-between flex">
                        <h1 className="text-2xl font-bold text-white">
                          {price.type}
                        </h1>
                        {/* <button className="bg-green-600 rounded-full px-2">Premium</button> */}
                      </p>
                      <p className=" text-gray-400 py-5">
                        {price.description1}
                      </p>
                      <p className="text-gray-400">{price.description2}</p>
                      <div className="py-4 ">
                        <button className="rounded-full box-border border-2 px-4 border-blue-500 text-white text-bold p-1 hover:bg-blue-500">
                          Get Started
                        </button>
                        <a href="#" className="pl-10 underline text-gray-500">
                          Learn More
                        </a>
                      </div>
                      <hr className=" border-gray-600 py-4 border-solid" />
                      <div className="flex flex-col">
                        <h1 className="text-white pb-4">What you get:</h1>
                        <div className="flex flex-col">
                          <ul className="pl-8">
                            <li className="flex ">
                              <Image
                                src={"/media/checked.159bc56f.svg"}
                                width={20}
                                height={20}
                                alt="check"
                              />
                              <p className="pl-2 text-gray-500">
                                {price.feature1}
                              </p>
                            </li>
                            <li className="flex pt-2">
                              <Image
                                src={"/media/checked.159bc56f.svg"}
                                width={20}
                                height={20}
                                alt="check"
                              />
                              <p className="pl-2 text-gray-500">
                                {price.feature2}
                              </p>
                            </li>
                            <li className="flex pt-2">
                              <Image
                                src={"/media/checked.159bc56f.svg"}
                                width={20}
                                height={20}
                                alt="check"
                              />
                              <p className="pl-2 text-gray-500">
                                {price.feature3}
                              </p>
                            </li>
                            <li className="flex pt-2">
                              <Image
                                src={"/media/checked.159bc56f.svg"}
                                width={20}
                                height={20}
                                alt="check"
                              />
                              <p className="pl-2 text-gray-500">
                                {price.feature4}
                              </p>
                            </li>
                            <li className="flex pt-2">
                              <Image
                                src={"/media/checked.159bc56f.svg"}
                                width={20}
                                height={20}
                                alt="check"
                              />
                              <p className="pl-2 text-gray-500">
                                {price.feature5}
                              </p>
                            </li>
                            <li className="flex pt-2">
                              <Image
                                src={"/media/checked.159bc56f.svg"}
                                width={20}
                                height={20}
                                alt="check"
                              />
                              <p className="pl-2 text-gray-500">
                                {price.feature6}
                              </p>
                            </li>
                            <li className="flex pt-2">
                              <Image
                                src={"/media/checked.159bc56f.svg"}
                                width={20}
                                height={20}
                                alt="check"
                              />
                              <p className="pl-2 text-gray-500">
                                {price.feature7}
                              </p>
                            </li>
                            <li className="flex pt-2">
                              <Image
                                src={"/media/checked.159bc56f.svg"}
                                width={20}
                                height={20}
                                alt="check"
                              />
                              <p className="pl-2 text-gray-500">
                                {price.feature8}
                              </p>
                            </li>
                            <li className="flex pt-2">
                              <Image
                                src={"/media/checked.159bc56f.svg"}
                                width={20}
                                height={20}
                                alt="check"
                              />
                              <p className="pl-2 text-gray-500">
                                {price.feature9}
                              </p>
                            </li>
                            <li className="flex pt-2">
                              <Image
                                src={"/media/checked.159bc56f.svg"}
                                width={20}
                                height={20}
                                alt="check"
                              />
                              <p className="pl-2 text-gray-500">
                                {price.feature10}
                              </p>
                            </li>
                            <li className="flex pt-2">
                              <Image
                                src={"/media/checked.159bc56f.svg"}
                                width={20}
                                height={20}
                                alt="check"
                              />
                              <p className="pl-2 text-gray-500">
                                {price.feature11}
                              </p>
                            </li>
                            <li className="flex pt-2">
                              <Image
                                src={"/media/checked.159bc56f.svg"}
                                width={20}
                                height={20}
                                alt="check"
                              />
                              <p className="pl-2 text-gray-500">
                                {price.feature12}
                              </p>
                            </li>
                            <li className="flex pt-2">
                              <Image
                                src={"/media/checked.159bc56f.svg"}
                                width={20}
                                height={20}
                                alt="check"
                              />
                              <p className="pl-2 text-gray-500">
                                {price.feature13}
                              </p>
                            </li>
                            <li className="flex pt-2">
                              <Image

                                src={"/media/checked.159bc56f.svg"}
                                width={20}
                                height={20}
                                alt="check"
                              />
                              <p className="pl-2 text-gray-500">
                                {price.feature14}
                              </p>
                            </li>
                            <li className="flex pt-2">
                              <Image
                                src={"/media/checked.159bc56f.svg"}
                                width={20}
                                height={20}
                                alt="check"
                              />
                              <p className="pl-2 text-gray-500">
                                {price.feature15}
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
