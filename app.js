
let matLenght = document.getElementById("matrixLenght");
let genBtn = document.getElementById("genBtn");
let sumBtn = document.getElementById("sumBtn");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");

genBtn.addEventListener("click", () => {
  let lenValue = matLenght.value;
  // console.log(event);

  // Clear previous inputs before generating new ones
  box2.innerHTML = "";
  box3.innerHTML = "";

  // Loop to generate input fields
  for (let i = 0; i < lenValue; i++) {
    for (let j = 0; j < lenValue; j++) {
      if (lenValue == 1) {
        alert("lenght 0 and 1 is not a matrix form");
      }

      let input = document.createElement("input");
      input.style.width = "100px";
      input.type = "number";
      input.id = `inp1-${i}${j}`;
      box2.appendChild(input);
     
      // box2.style.width='100%'

      let input2 = document.createElement("input");
      input2.style.width = "100px";
      input2.type = "number";
      input2.id = `inp2-${i}${j}`;
      box3.appendChild(input2);
      //  box3.style.width='100%'
       
      
    }
   
    box2.innerHTML+=(`<br>`)
    box3.innerHTML+=(`<br>`)
   
  }
 
});

sumBtn.addEventListener("click", () => {
  // console.log("hello");
  let lenValues = matLenght.value;
  

  // console.log(lenValues);
    

  for (let i = 0; i < lenValues; i++) {
    for (let j = 0; j < lenValues; j++) {
      

      let inp1value = document.getElementById(`inp1-${i}${j}`).value;
      let inp2value = document.getElementById(`inp2-${i}${j}`).value;
      console.log(Number(inp1value)+ Number(inp2value));
// console.log(inp1value+inp2value);

      let input4 = document.createElement("input");
      input4.style.width = "100px";
      input4.type = "number";
      input4.id = `inp3-result`;
      // input4.class = `input`;
      // input4.value = Number(inp1value)+ Number(inp2value);
      input4.value = Number(inp1value)+ Number(inp2value);

      box4.appendChild(input4);
      //  box4.style.width='100%'
      
      
    }  
    let br1 = document.createElement("br");
    box4.appendChild(br1);
  
  }
    lenValues = matLenght.value=""
  
});



minBtn.addEventListener("click", () => {
  // console.log("hello");
  let lenValues = matLenght.value;

  // console.log(lenValues);
    

  for (let i = 0; i < lenValues; i++) {
    
    for (let j = 0; j < lenValues; j++) {
      

      let inp1value = document.getElementById(`inp1-${i}${j}`).value;
      let inp2value = document.getElementById(`inp2-${i}${j}`).value;
      console.log(Number(inp1value)+ Number(inp2value));

      let input5 = document.createElement("input");
      input5.style.width = "100px";
      input5.type = "number";
      input5.id = `inp3-result`;
      // input5.value = Number(inp1value)-Number(inp2value);
      input5.value = Number(inp1value)-Number(inp2value);

      box5.appendChild(input5);
      //  box5.style.width='100%'
      // console.log(input5);
      
    }
     
    // box5.innerHTML+=(`<br>`)
    // lenValues = matLenght.value=""
    let br = document.createElement("br");
    box5.appendChild(br);
    // box5.innerHTML+=(`<br>`)
    
  }
    lenValues = matLenght.value=""
});
