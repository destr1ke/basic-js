
module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let filter = members.filter(i=>typeof(i) === 'string');
  return (filter.map(i=>i.trim().slice(0,1).toUpperCase()).sort().join(''))
};
