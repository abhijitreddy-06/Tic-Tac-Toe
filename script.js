const cells = document.querySelectorAll(".cell");
const status = document.querySelector(".status");
const reset = document.querySelector(".reset");

let isX = true;

// Add event listener to each cell
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (!cell.textContent) {
      toggleMark(cell);
      win(); 
      toggleStatus();
    }
  });
});

function resett() {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  status.textContent = "X turn";
  isX = true;
}

reset.addEventListener("click", () => {
  resett();
});

function toggleMark(cell) {
  if (isX) {
    addXMark(cell);
  } else {
    addOMark(cell);
  }
}

function toggleStatus() {
  status.textContent = isX ? "O turn" : "X turn";
  isX = !isX;
}

function addXMark(cell) {
  cell.textContent = "X";
}

function addOMark(cell) {
  cell.textContent = "O";
}

function win() {
  const cells = Array.from(document.querySelectorAll(".cell"));

  // Winning combinations for rows, columns, and diagonals
  const winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6], // Diagonal 2
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;

    // Trim textContent to avoid extra spaces
    const cellA = cells[a].textContent.trim();
    const cellB = cells[b].textContent.trim();
    const cellC = cells[c].textContent.trim();

    if (cellA !== "" && cellA === cellB && cellB === cellC) {
      setTimeout(() => {
        alert(`Player ${cellA} Won`);
        resett();
      }, 100);
      return;
    }
  }
}
