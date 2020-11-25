import React from "react";

function Badge({title}) {
  return (
    <div className="inline-block">
      <h3 className="bg-white text-purple-600 font-bold rounded-full pl-8 pr-8 uppercase">
        {title}
      </h3>
    </div>
  );
}

export default Badge;
