import React, { useEffect, useState } from "react";
import ListItemTemplate from "./ListTemplate";

const WorkEducationList = () => {
  const [workData, setWorkData] = useState<any[]>([]);
  const [educationData, setEducationData] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        "Content-Type": "application/json",
        "User-agent": "learning app",
      };

      const workResponse = await fetch("/WorkList.json", { headers });
      const educationResponse = await fetch("/EduList.json", { headers });

      const workJson = await workResponse.json();
      const educationJson = await educationResponse.json();

      if (workJson.work) {
        setWorkData(Object.values(workJson.work));
      }

      if (educationJson.edu) {
        setEducationData(Object.values(educationJson.edu));
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="py-2 px-3 flex mb-4 bg-gray-100 dark:bg-gray-900 rounded-md ">
        <button
          className={`px-4 py-2 rounded w-1/2 ${
            activeTab === "work" && "bg-gray-300 dark:bg-gray-800"
          }`}
          onClick={() => setActiveTab("work")}
        >
          опыт работы
        </button>
        <button
          className={`px-4 py-2 rounded w-1/2 ${
            activeTab === "education" && "bg-gray-300 dark:bg-gray-800"
          }`}
          onClick={() => setActiveTab("education")}
        >
          образование
        </button>
      </div>

      {activeTab === "work" ? (
        <div className="border border-gray-200 dark:border-gray-600 rounded-xl">
          {workData.length > 0 ? (
            workData.map((item, index) => (
              <ListItemTemplate
                key={index}
                name={item.name}
                date={item.date}
                positionOrMajor={item.position}
                website={item.website}
                responsibilitiesOrSkills={item.responsibilities}
                isWork={true}
              />
            ))
          ) : (
            <p>Данные не подгрузились - скачать резюме</p>
          )}
        </div>
      ) : (
        <div className="border border-gray-200 dark:border-gray-600 rounded-xl">
          {educationData.length > 0 ? (
            educationData.map((item, index) => (
              <ListItemTemplate
                key={index}
                name={item.name}
                date={item.date}
                positionOrMajor={item.major}
                website=""
                responsibilitiesOrSkills={item.relatedSkills}
                isWork={false}
              />
            ))
          ) : (
            <p>Данные не подгрузились - скачать резюме</p>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkEducationList;
