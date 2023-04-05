var newDiv=document.createElement('div');
newDiv.className="hello";
newDiv.id="hello1";
newDiv.setAttribute('title','hello');
var newDivText=document.createTextNode('hhello');
newDiv.appendChild(newDivText);
var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);