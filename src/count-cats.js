
module.exports = function countCats(arr) {
  let count=0;
  for (let i=0;i<arr.length;i++){
    arr[i].map(i=>i === '^^' ? count++:null)
  }
  return(count);
};

countCats([[1,2,3],[3,4,5,'^^']])
