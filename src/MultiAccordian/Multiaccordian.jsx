import { useState } from "react"
import data from "./data";

//Two approach (one single select) and another (multiselect)
export default function Multiaccordian() {
    const [select,setSelect]=useState(null);
    function handleSingleSelection(getCurrentId){

    }
  return (
    <div className="wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ? data.map(item=>
                    <div className="item">
                        <div onClick={()=>handleSingleSelection(item.id)} className="title">
                            <h3>{item.question}</h3>
                            <span>+</span>
                        </div>
                    </div>
                ) :<div>No data Found</div>
            }
        </div>
      
    </div>
  )
}

