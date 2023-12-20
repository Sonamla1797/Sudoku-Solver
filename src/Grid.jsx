
import React from 'react';
import GridInput from './GridInput';
import "./Grid.css";

export default function Grid({ data , updateData }) {
    
  return (
    <div className='grid-container'>
      {data.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((gridData, colIndex) => (
            
                
              <GridInput  key={colIndex} gridData={gridData} row={rowIndex} col={colIndex} updateData={updateData} className="grid-input"/>
            
          ))}
        </div>
      ))}
      
      
    </div>
  );
}
