import {  useEffect, useState } from "react";


const Categories=()=>{
    const [data, setData] = useState([]);

    useEffect(() => { 
      const apiUrl = "https://api.testvalley.kr/main-shortcut/all";
   
      fetch(apiUrl)
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

return(
    <div className="mt-24 p-2 flex justify-center">
        <div className="flex space-x-4">
         {data.map((item) => (
          <div key={item.mainShortcutId} className="rounded-md h-20 w-20">
            <img src={item.imageUrl} alt={`Slide ${item.mainShortcutId}`} />
          </div>
          
        ))}
        </div>
    </div>
);
}
export default Categories;