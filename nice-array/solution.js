function isNice(arr){
  if(arr.length === 0) return false;
  
  return (arr.every(function(current, index, array) {
    return (array.includes(current + 1) || array.includes(current - 1));
  }));
}