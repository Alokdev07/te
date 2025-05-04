import React from "react"; // fast page component

function TaskComponent({
  headerText = "Completed Task",
  actualvalue = "26",
  fullValue = "40",
  className = "",
  src = "https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png",
}) {
  return (
    <div
      className={`h-32 m-1 w-56  rounded-md relative ${className}`}
    >
      <div className="flex absolute top-3 left-4 justify-center items-center">
        <div className="h-8 w-8 rounded-full bg-white">
          <img src={src} alt="png" />
        </div>
        <h2 className="m-1 font-semibold text-black">{headerText}</h2>
      </div>
      <div className="flex w-full  justify-between absolute bottom-3 left-4 items-center text-black">
        <h2 className="">
          <span className="text-2xl font-semibold">{actualvalue}</span>/
          {fullValue}
        </h2>
        <button className="border absolute right-8 rounded-full px-2 bg-white text-black">
          View all
        </button>
      </div>
    </div>
  );
}

export default TaskComponent;
