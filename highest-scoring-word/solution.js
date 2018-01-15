function high(x){
    words = x.split(' ');
    wordScores = words.map(word => {
      return word.split('').map(char => {
        return char.charCodeAt(0) - 96;
      }).reduce((acc, cur) => acc + cur, 0);
    })
    
    return words[wordScores.indexOf(Math.max(...wordScores))];
  }