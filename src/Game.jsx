import Grid from "./Grid"
import {useState} from "react"
import {solveSudoku} from "./helper.js"
export default function(){
    const[solved , setSolved]   = useState(false);
    let arr = [
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
      ];
    const [info, setData] = useState(arr);
    const updateData = (row , col , value)=>{
        
        setData(prevData=>{
            const newData = [...prevData];
            newData[row] = [...newData[row]];
            newData[row][col] = value;
            return newData;
        })
    }
    
    const handleGen =()=>{
        let ans  = solveSudoku(info);
        setData(ans);
        console.log(info);
       setSolved(true);
       
    }
    return (
        <div>
            <Grid data={info } updateData = {updateData}/>
            <br />
            <button style={{backgroundColor:"#F6AE2D"}} onClick={handleGen}>Generate</button>

        

            {solved === true ?<div>
                <hr /> <hr /><hr />
                <h1 style={{color:"#86BBD8"}}> Answer  </h1>
                <Grid data={info } updateData = {updateData} />
            </div> : null}
      
        </div>
    )
}