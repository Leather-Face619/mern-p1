import React, { useEffect, useState } from "react";

function Cards({ item }) {
  
  var [st, setst] = useState("Download")
  var [showQR, setShowQR] = useState(false)
  
  useEffect(() => {
    if (item.category !== "Free") {
      setst("Buy now");
    }
  }, [item.category])
  
  const handleDownload = () => {
    // Define the URL of the PDF file
    const pdfUrl = '../assets/th.pdf'; // Replace this with the actual URL of your PDF file
    
    // Create a link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${item.name}.pdf`; 
    document.body.appendChild(link);
    
    // Trigger the click event of the link to start download
    link.click();
  };

  const handleBuyNow = () => {
    setShowQR(true);
  };

  const handleLearnMore = () => {
    const wikipediaUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(item.name)}`;
    window.open(wikipediaUrl, '_blank');
  };

  return (
    <>
      <div className="max-w-sm  rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105">
        <img className="w-full h-[500px] object-cover" src={`./src/assets/images/${item.image}`} alt={item.image} />
        
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{item.name}</div>
          <p className="text-gray-700 dark:text-gray-300 text-base">{item.title}</p>
        </div>
        
        <div className="px-6 pt-2 pb-2">
          <span className="inline-block bg-blue-200 dark:bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 dark:text-blue-200 mr-2 mb-2">{item.language}</span>
        </div>
        
        <div className="px-6 pt-2 pb-2 flex justify-between items-center">
          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">{item.category}</span>
          <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">₹ {item.price}</span>
        </div>
        
        <div className="px-6 pb-4 mt-4 flex justify-between">
          <button 
            onClick={st === "Download" ? handleDownload : handleBuyNow}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            {st}
          </button>
          <button 
            onClick={handleLearnMore}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Learn More
          </button>
        </div>
      </div>
      {showQR && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl mb-4">स्कैन करने के लिए QR कोड</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png" alt="QR Code" className="w-120 " />
            <button onClick={() => setShowQR(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">बंद करें</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cards;
