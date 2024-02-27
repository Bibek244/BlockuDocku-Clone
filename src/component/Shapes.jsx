import React from 'react'

const pieces = [
    // Piece 1
    [
      [1, 1],
      [1, 1]
    ],
    // Piece 2
    [
      [1, 1, 1],
      [0, 1, 0]
    ],
    // Piece 3
    [
      [1, 0, 0],
      [1, 1, 1]
    ],
    // Add more pieces as needed
  ];
  
  // Define the colors for each piece
  const colors = [
    'red',
    'green',
    'blue',
    // Add more colors as needed
  ];
  
  // Piece component
  const Piece = ({ shape, color }) => {
    return (
      <div style={{ display: 'inline-block', margin: '5px' }}>
        {shape.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: cell ? color : 'transparent',
                  border: '1px solid black'
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  

export const Shapes = () => {
  return (
    <div>
      {pieces.map((shape, index) => (
        <Piece key={index} shape={shape} color={colors[index]} />
      ))}
    </div>
  )
}
