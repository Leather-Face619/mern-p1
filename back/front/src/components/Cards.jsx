import React, { useEffect, useState } from "react";
function Cards({ item }) {
  var [st, setst] = useState("Download")
  useEffect(() => {
    if (item.category !== "Free") {
      setst("Buy now");
    }})
  
  const handleDownload = () => {
    // Define the URL of the PDF file
    const pdfUrl = '../assets/th.pdf'; // Replace this with the actual URL of your PDF file
    
    // Create a link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'down.pdf'; // Set the file name for download
    document.body.appendChild(link);
    
    // Trigger the click event of the link to start download
    link.click();
    
 
  };

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
              {st === "Download" ? (
  <button onClick={handleDownload}>{st}</button>
) : (
  <button onClick={() => { alert("404 ") }}>{st}</button>
)}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
