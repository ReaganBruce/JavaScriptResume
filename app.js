let friends = ["Rebecca", "John", "Jake", "Connor", "Jordan"];


function linesOfCode() {
    loop1: for (i = 0; i < friends.length; i++) {
        loop2: for (j = 99; j > 0; j--) {
          if (j > 2) {
            console.log(`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} lines of code in the file.`);
          } else if (j === 2) {
            console.log(`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} line of code in the file`);
          } else {
            console.log(`${j} line of code in the file, ${j} line of code; ${friends[i]} strikes one out, clears it all out, now there is no code in the file`);
          }
        }
    }
}

linesOfCode()