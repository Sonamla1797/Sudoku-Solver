import { useState } from "react";

export default function GridInput({gridData ,row  ,col , updateData}){
    const[num ,setNum] = useState(gridData);
    let handleChange = (e) =>{
        let newNum= e.target.value;
        
        setNum(newNum);
        updateData(col,row,newNum)
    }
    return (
        <input value={num} onChange={handleChange} type="number" min={1} max={9} />
    )
}