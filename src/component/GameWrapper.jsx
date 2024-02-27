import React, { useState } from "react";
import Board from "./Board";
import { Shapes } from "./Shapes";
import PiecePreview from "./PiecePreview";

const ROWS = 9;
const COLS = 9;

export const GameWrapper = () => {
  const [board, setBoard] = useState(() => initializeBoard());
  //  const [selected , setSelected ] = useState([])
  const [currentPiece, setCurrentPiece] = useState(initializeCurrentPiece());
  function initializeCurrentPiece() {
    return [
      
      [1],
      [1],
      [1],
      [1],
      [1],
      [1]
    ];
  }
   

  function initializeBoard() {
    const newBoard = [];
    for (let i = 0; i < ROWS; i++) {
      newBoard.push(Array.from({ length: COLS }, () => 0));
    }
    return newBoard;
  }
  const isPlacementValid = (piece,  pieceRow, pieceCol ) => {
    // Implement logic to check if the placement of the piece at the given position is valid
    // This might involve checking if the cells are empty, if the piece fits on the board, etc.
   

    // Check if the piece fits within the boundaries of the board
    if (
        pieceRow < 0 ||
        pieceRow + piece.length > ROWS ||
        pieceCol < 0 ||
        pieceCol + piece[0].length > COLS
      ) {
        return false;
      }

    // Check if the cells where the piece will be placed are empty
    for (let i = 0; i < piece.length; i++) {
      for (let j = 0; j < piece[0].length; j++) {
        if (piece[i][j] === 1 && board[pieceRow + i][pieceCol + j] === 1) {
          return false;
        }
      }
    }

    // Optionally, add more checks based on your game's rules

    return true;
  };

  const placePiece = ( pieceRow, pieceCol) => {
    const piece = currentPiece;
    if (isPlacementValid(piece, pieceRow, pieceCol)) {
        const newBoard = [...board];

    // Update the cells on the board with the piece
    for (let i = 0; i < piece.length; i++) {
      for (let j = 0; j < piece[0].length; j++) {
        if (piece[i][j] === 1) {
          newBoard[pieceRow + i][pieceCol + j] = 1;
        }
      }
    }
      setBoard(newBoard);
      // setScore()
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-800">
      <h1>Blokudoku</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>Preview:</h2>
        <PiecePreview piece={currentPiece} /> {/* Display the PiecePreview component */}
      </div>
      <Board board={board} placePiece={placePiece} />

      <div>{/* Display current score */}</div>
      <div>{/* Display controls (e.g., buttons for new game, etc.) */}</div>
    </div>
  );
};

//   const  toggleSelected = (id) =>{

//     setCellStates(cellStates.map(div => div.id === id ? {...div, isActive: !div.isActive} : div))
//     }
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-blue-800">
// <div className="grid grid-cols-9 grid-rows-9 gap-1">

// {cellStates.map((item, index) => (
//      <Board toggleSelected={toggleSelected} item={item} key ={index} index ={index} />
//      ))}
//     </div>
//      <Shapes />
//     </div>
//   );
// };
