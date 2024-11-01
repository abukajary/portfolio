import React from "react";
import Tags from "../ui/Tags";

const Projects = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">мои работы</h1>
        <div className="text-purple-500 cursor-pointer">смотреть больше</div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 p-5 mt-5 border border-gray-200 dark:border-gray-600 rounded-xl">
        <div className="flex flex-col-reverse">
          <div className="py-4">
            <img src="./libreous.png" alt="" />
          </div>
          <div>
            <p className="text-xl font-semibold font-serif">01 | Libreous</p>
            <p className="text-gray-500">
              сайт книжного магазина. Авторизация и книги тянутся с mongoDB
            </p>
            <div className="mt-4">
              <Tags text={["react.js", "next.js"]} />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse">
          <div className="py-4">
            <img src="./libreous.png" alt="" />
          </div>
          <div>
            <p className="text-xl font-semibold font-serif">02 | Libreous</p>
            <p className="text-gray-500">
              сайт книжного магазина. Авторизация и книги тянутся с mongoDB
            </p>
            <div className="mt-4">
              <Tags text={["react.js", "next.js"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
