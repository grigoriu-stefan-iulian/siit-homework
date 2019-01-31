

const para = document.createElement('p')
const node = document.createTextNode("Gender");
para.appendChild(node);
myDiv.appendChild(para);

const label = document.createElement('label')
myDiv.appendChild(label);
const node2 = document.createTextNode('M')
const radioButton1 = document.createElement('input')
radioButton1.setAttribute('type', 'radio')

label.appendChild(radioButton1);
label.appendChild(node2);
//-------------------------------------------------------------

const radioButton2 = document.createElement('input')
radioButton2.innerHTML = 'M'
radioButton2.setAttribute('type', 'radio')

myDiv.appendChild(radioButton2);

const yourMessage = document.createElement('textarea')
myDiv.appendChild(yourMessage);
yourMessage.setAttribute('placeholder', 'Your message here')

const submitButton = document.createElement('button')
submitButton.innerHTML = 'Submit'
myDiv.appendChild(submitButton);
submitButton.setAttribute('style', 'background: blue')

