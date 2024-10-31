import React from "react";

interface TagsProps {
  img?: React.ReactNode;
  text: string[];
  backgroundColor?: string;
}

const Tags: React.FC<TagsProps> = ({ img, text, backgroundColor }) => {
  return (
    <div className="flex flex-wrap gap-2 ">
      {text.map((item, index) => (
        <div
          key={index}
          className="py-2 px-4 bg-purple-500 rounded-xl cursor-pointer w-fit h-fit text-white text-sm flex items-center justify-center gap-3"
          style={{ backgroundColor }}
        >
          <span>{item}</span>
          {img}
        </div>
      ))}
    </div>
  );
};

export default Tags;
