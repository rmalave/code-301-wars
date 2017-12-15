function capitalize(s){
  let str = s.split('');
  
  let even = str.map((x,index) => index % 2 === 0 ? x.toUpperCase() : x).join('');
  let odd = str.map((x,index) => index % 2 !== 0 ? x.toUpperCase() : x).join('');

  return [even, odd];
}