import React from 'react';

const PiecePreview = ({ piece }) => {
  return (
    <div>
      {piece.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: cell === 1 ? 'blue' : 'transparent',
                border: '1px solid black',
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PiecePreview;
