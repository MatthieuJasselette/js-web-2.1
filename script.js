
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import axios ?
import axios from 'axios';
/*
  Put the JavaScript code you want below.
*/

//code to cycle through the images
let imgCycler = async () => {
    let newImg =  await getImg();
    let imgBox = document.getElementById('squareBox');
    imgBox.innerHTML = "";
    let imgItem = document.createElement('img')
    imgItem.setAttribute("alt", "img not found");
    imgItem.setAttribute("id", "squareImg");
    imgItem.setAttribute("src", newImg); //part to replace with the api content
    imgBox.appendChild(imgItem);
}

//code to fetch the api content needed ; used in imgCycler
let getImg = async () => {
  let output = "";
  try {
    output = await axios.get('https://aws.random.cat/meow')
    return output.data.file;
  } catch (error) {
    console.error(error);
  }
}

//code to call the imgCycler fct on repeated intervals
window.setInterval( () => {imgCycler()}, 2500);

console.log("Hey look in your browser console. It works!");


/* code from the previous cat cycler
//code to push the content of imgImport into an array ; not needed in this case
let imgArr = [];
console.log(imgArr);
for (let property1 in imgImport) {
  imgArr.push(imgImport[property1]);
}

// pseudo loop initiator
let i = 0 ;

//code to cycle through the resized images
let imgCycler = (input) => {
    // code to send an image in the index.html
    let imgBox = document.getElementById('squareBox');
    imgBox.innerHTML = ""; //sert à effacer l'image pour la remplacer par la nouvelle
    let imgItem = document.createElement('img')
    imgItem.setAttribute("alt", "img not found");
    imgItem.setAttribute("id", "squareImg");
    imgItem.setAttribute("src", imgArr[input]); //part to replace with the api content
    imgBox.appendChild(imgItem);
    //nasty solution courtesy of Thibaut & Romain
    i++
    i%=imgArr.length;
}

//code to call the imgCycler fct on repeated intervals
window.setInterval( () => {imgCycler(i)}, 1000);
*/
