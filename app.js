'use strict';

const inputText = document.querySelector(".inputText");
const inputNum = document.querySelector(".inputNum");
const generateBtn = document.querySelector(".generate-btn");
const output = document.querySelector(".output-text");
const copyBtn = document.querySelector(".copy-btn");

const cloneText = () => {
    if(!inputText.value || !inputNum.value){
        return;
    }
    for(let i = 0; i < inputNum.value; i++){
        output.textContent += inputText.value + "\n";
    }
    if(output.textContent){
        copyBtn.classList.add("active");
    }
}

const copyText = () => {
    navigator.clipboard.writeText(output.textContent);
    output.textContent = "";
    inputText.value = "";
    inputNum.value = "";
}

generateBtn.addEventListener("click", cloneText);
copyBtn.addEventListener("click", copyText);
