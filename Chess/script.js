// Map piece names to their image files
const pieceImages = {
  wK: "assets/pieces/wK.svg",
  wQ: "assets/pieces/wQ.svg",
  wR: "assets/pieces/wR.svg",
  wB: "assets/pieces/wB.svg",
  wN: "assets/pieces/wN.svg",
  wP: "assets/pieces/wP.svg",
  bK: "assets/pieces/bK.svg",
  bQ: "assets/pieces/bQ.svg",
  bR: "assets/pieces/bR.svg",
  bB: "assets/pieces/bB.svg",
  bN: "assets/pieces/bN.svg",
  bP: "assets/pieces/bP.svg",
};

// Starting position of the board, row by row
const startPosition = [
  ["bR","bN","bB","bQ","bK","bB","bN","bR"],
  ["bP","bP","bP","bP","bP","bP","bP","bP"],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  ["wP","wP","wP","wP","wP","wP","wP","wP"],
  ["wR","wN","wB","wQ","wK","wB","wN","wR"],
];

// Grab the board element from the HTML
const board = document.getElementById("board");

// Loop through 64 squares
for (let i = 0; i < 64; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  const row = Math.floor(i / 8);
  const col = i % 8;

  if ((row + col) % 2 !== 0) {
    square.classList.add("dark");
  }

  // Place piece if there is one
  const piece = startPosition[row][col];
  if (piece) {
    const img = document.createElement("img");
    img.src = pieceImages[piece];
    img.classList.add("piece");
    square.appendChild(img);
  }

  board.appendChild(square);
}