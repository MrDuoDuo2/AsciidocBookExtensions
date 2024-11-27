import { tagger } from 'gee_tagger';
const content = document.getElementById('content');
if (content){
  console.log(content.innerText);
  let result = tagger(content.innerText)
  console.log(result)
}
// document.getElementById("result").innerHTML = result;
