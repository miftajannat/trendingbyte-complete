import heroData from "../data/herodata";

const Hero = () => {
  return (
    <div class="banner">
      <div className="flex justify pt-10">
        {heroData.map((hero) => (
          <div key={hero.id}>
            <div className="flex flex-col md:flex-row">
              <div class="flex flex-col items-start md:flex-row md:items-end">
                <div class="pt-20 md:w-1/2">
                  <h1 class="font-bold text-blue-400 text-6xl py-5">
                    {hero.title}
                  </h1>
                  <div class="w-full md:w-9/12">
                    <p class="text-base text-gray-600">
                      {hero.description}
                    </p>
                  </div>
                  <div class="mt-8 md:mt-16">
                    <form class="flex flex-col">
                      <input
                        class="w-full md:w-64 p-3"
                        type="text"
                        placeholder="Type your email address"
                      />
                      <button className="bg-blue-400 shadow-lg shadow-blue-500/50 p-2 rounded-lg text-white font-bold w-24 mt-6 ">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="h-96 w-96 pt-16"
                  src={hero.image }
                  alt={hero.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
