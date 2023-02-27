import Image from "next/image";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import testimonialData from "@/data/testimonialdata";



const Testimonial = () => {
  
  SwiperCore.use([Autoplay]);

  function Slide() {
    return (
      <div className="flex gap-8">
        {testimonialData.map((testimonial) => (
          <>
            <div key={testimonial.id}>
              <div className="">
                <div className="bg-gray-800 box-border border-2 border-gray-700 rounded-lg w-[320px]">
                  <div>
                    <div className="flex">
                      <p className="px-4 py-5">
                        <img
                          src={testimonial.image}
                          alt="avatar"
                          className="w-10 h-10 rounded-full"
                          width={50}
                          height={50}
                        />
                      </p>
                      <div className="pt-4">
                        <p className="text-xl font-bold text-gray-600">
                          {testimonial.title}
                        </p>
                        <p className="text-gray-600">
                          {testimonial.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="p-4 text-gray-400">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    );
  }

  return (
    <section className="pt-20">
      <div className="container mx-auto">
      <div class="md:max-w-lg mx-auto text-center mb-8">
          <h2 class="mb-4 font-heading font-semibold text-blue-500 text-6xl ">
            Testimonial
          </h2>
          </div>

        <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 2000 }}>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonial;
