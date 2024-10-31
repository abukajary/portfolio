import React from "react";
import BuildingLogo from "../ui/BuildingLogo";

interface ListItemTemplateProps {
  name: string;
  date: string;
  positionOrMajor: string;
  website: string;
  responsibilitiesOrSkills: string[];
  isWork: boolean;
}

const ListItemTemplate: React.FC<ListItemTemplateProps> = ({
  name,
  date,
  positionOrMajor,
  website,
  responsibilitiesOrSkills,
  isWork,
}) => {
  return (
    <div className="flex mt-4 text-sm gap-3 items-start p-5 ">
      <div className="flex justify-center w-1/6 sm:w-auto">
        <BuildingLogo />
      </div>

      <div>
        <p className="text-xs text-gray-400">{date}</p>
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="text-xs text-gray-400">{positionOrMajor}</p>
        {isWork && <a href={website}>{website}</a>}
        <ul className="list-disc px-4">
          {responsibilitiesOrSkills.map((item: string, idx: number) => (
            <li className="py-[2px]" key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListItemTemplate;
