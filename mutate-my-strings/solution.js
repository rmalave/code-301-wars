function mutateMyStrings(stringOne, stringTwo) {
    arr1 = stringOne.split('');
    arr2 = stringTwo.split('');
    
    newArr = [arr1.join('')];
  
    for (var i = 0; i < stringTwo.length; i++) {
      if(arr1[i] !== arr2[i]) {
        arr1[i] = arr2[i];
        newArr.push(arr1.join(''));
      }
    }
    
    return newArr.join('\n') + '\n';
  }