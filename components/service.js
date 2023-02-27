import Image from "next/image";
import serviceData from "@/data/servicedata";

const Services = () => {


  return (
    <>
      <section class="pt-20 overflow-hidden">
        <div class="container md:mx-auto">
          <div class="md:max-w-lg mx-auto text-center mb-8">
            <h2 class="mb-4 font-heading font-semibold text-blue-500 text-6xl sm:text-7xl">
              Our Services
            </h2>
          </div>
          <div className="md:max-w-[1040px] sm:mx-5 md:mx-auto box-border">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 bg-gray-800 box-border border-1 border-gray-600 rounded-lg p-16 ">
              {serviceData.map((service) => (
                <>
                  <div key={service.id}>
                    <div>
                      <div className="flex flex-col">
                        <div className="w-[70px] h-[70px] bg-gray-900 flex items-center justify-center rounded-full">
                        {/* <div className="box-border rounded-full"> */}
                          <img src={ service.image} width={40} height={40} alt={service.name1} />
                        </div>
                        <div className="flex flex-col my-8">
                        <p className="text-white text-xl font-bold">
                          {service.name1}
                        </p>
                        <p className="text-white text-xl font-bold">
                          {service.name2}
                        </p>
                        </div>
                        <p className="text-base text-gray-400 overflow-hidden h-[78px]">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
