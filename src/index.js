module.exports = 
function check(str, bracketsConfig) {
  let brCache = [];
  let trig=false;
  for (let i = 0; i < str.length; i++) {
    for (const br of bracketsConfig) {
      if ((str[i] === br[0]) && ((br[0] !== br[1]) || !trig)) {
        brCache.push(br[0]);
        if((br[0] === br[1])) trig=!trig;
      } else if (str[i] === br[1]){
        if(brCache.length == 0) return false;
        if(brCache[brCache.length-1] === br[0]){
          brCache.pop();
          if((br[0] === br[1])) trig=!trig;
        }
      };
    }
  }
  return brCache.length == 0;
}

// debugger
// console.log(check('|()|(||)||', [['(', ')'], ['|', '|']]));
// -> true