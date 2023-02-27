import React from "react";
import projectData from "@/data/projectdata";

const Project = () => {
  return (
    <section class="pt-20 overflow-hidden">
      <div class="container mx-auto">
        <div class="md:max-w-lg mx-auto text-center mb-8">
          <h2 class="mb-4 font-heading font-semibold text-blue-500 text-6xl sm:text-7xl">
            Our Projects
          </h2>
          <p class="text-lg text-gray-400">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>

        <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
          {projectData.map((project) => (
            <>
              <a href="#">
                <div class="group flex flex-col justify-end h-full relative overflow-hidden">
                  <img
                    class="mx-auto md:w-[300px] w-auto h-[300px] transform group-hover:scale-110 transition ease-out duration-500 box-border rounded-lg"
                    src={
                      project.image
                    }
                    alt="cccc"
                  />
                  <div class="absolute bottom-0  p-2">
                    <div class="md:p-5 p-3 rounded-md ">
                      <h2 class="mb-2  font-bold text-xl uppercase text-gray-400 tracking-px">
                        {project.title}
                      </h2>
                      {/* <p class="text-blue-500 ">{project.description}</p> */}
                    </div>
                  </div>
                </div>
              </a>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
