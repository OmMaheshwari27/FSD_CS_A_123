import react from 'react';
console.log("hello");

const para = document.createElement('p');
para.style.color = "red";
para.id = "para-1";
document.body.appendChild(para);
para.innerHTML = "hey how are you?.. i am doing good";
