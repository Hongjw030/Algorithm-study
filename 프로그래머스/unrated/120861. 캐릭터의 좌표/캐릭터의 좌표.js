function solution(keyinput, board) {
  // board 가장자리 좌표는 (edge,edge)
  let edgeRow = Math.floor(board[0] / 2);
  let edgeCol = Math.floor(board[1] / 2);
  // 시작 좌표
  let location = [0, 0];

  for (let i = 0; i < keyinput.length; i++) {
    switch (keyinput[i]) {
      case "right":
        location[0] = location[0] + 1 > edgeRow ? edgeRow : location[0] + 1;
        break;
      case "left":
        location[0] =
          location[0] - 1 < edgeRow * -1 ? edgeRow * -1 : location[0] - 1;
        break;
      case "down":
        location[1] =
          location[1] - 1 < edgeCol * -1 ? edgeCol * -1 : location[1] - 1;
        break;
      case "up":
        location[1] = location[1] + 1 > edgeCol ? edgeCol : location[1] + 1;
        break;
    }
  }
  return location;
}