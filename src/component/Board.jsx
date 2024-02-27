import React, { useState } from "react";

const Board = ({ board, placePiece }) => {
    const colBorder =(colIndex) =>{
        if(colIndex === 2 || colIndex === 5 ){
            return true
        }
        }
        const rowBorder = (rowIndex) => {
            if(rowIndex === 2 || rowIndex === 5 ){
                return true
            }  
        }

        const handlePlacePiece = ( rowIndex, colIndex) => {
            // Call the placePiece function to place the current piece at the specified position
            placePiece(rowIndex, colIndex);
            console.log(rowIndex,)
          };

  return (
    <div className=" grid grid-cols-9 grid-rows-9 gap-1 w-fit">
{board.map((row, rowIndex) =>((
    row.map((cell, colIndex) => (
        <div
        
        key={`${rowIndex}-${colIndex}`}
        className={` ${cell === 1 ? 'bg-blue-500' : ''} ${colBorder(colIndex) ? 'border-r-4 border-black' :''} ${rowBorder(rowIndex) ? 'border-b-4 border-black' :''} bg-white shadow-2xl  w-10 h-10 text-gray-700 cursor-pointer hover:bg-blue-500`} 
        onClick={() => handlePlacePiece(rowIndex, colIndex)}
        > {cell ? console.log(rowIndex + "-" + colIndex) : ''}</div>
    ))
)))}
      </div>
  );
};

export default Board;
