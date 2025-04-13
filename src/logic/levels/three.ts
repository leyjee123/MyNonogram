import data from "./levels.json";

// interface Level {
//   id: number;
//   title: string;
//   board: string[];
// }

// interface LevelSet {
//   size: number;
//   levels: Level[];
// }

// interface GameData {
//   levelSets: LevelSet[];
// }
function retrieveSolution(size: number, levelId: number) {
  const sizeSet = data.levelSets.find((set) => set.size === size);

  if (sizeSet) {
    // 2. Find the level with id 1
    const level1 = sizeSet.levels.find((level) => level.id === levelId);

    if (level1) {
      // 3. Access the first row of the board
      const firstRow = level1.board[0];

      console.log(firstRow); // Output: "010"
    }
  }
}
retrieveSolution(3,1);