import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 p-3  ">
        <div className="card w-full  bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img className=" h-36" src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge rounded-lg  badge-outline">₹ {item.price}</div>
              <div className=" cursor-pointer  px-2 py-1 rounded-lg border-zinc-500 border-[1px] hover:bg-zinc-800 hover:text-zinc-50 duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
