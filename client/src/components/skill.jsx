import React from "react";

const Skill = ({ skill }) => {
  return (
    <div className="text-md bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white rounded-lg inline-block m-1 p-2">
      {skill}
    </div>
  );
};

export default Skill;