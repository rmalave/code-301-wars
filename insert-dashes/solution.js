function insertDash(num) {
    let numStrings = num.toString().split('');
    let oddArr = ['1', '3', '5', '7', '9'];
    let len = numStrings.length;
    
    for(var i = 0; i < len; i++) {
      if(oddArr.includes(numStrings[i]) && oddArr.includes(numStrings[i+1])) {
        numStrings.splice(i+1, 0, '-');
        len++;
      }
    }
    
    return numStrings.join('');
    
 }