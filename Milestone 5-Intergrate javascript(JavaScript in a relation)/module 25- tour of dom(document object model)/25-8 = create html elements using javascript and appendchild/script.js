// create a section

// 1st where to add
const mainContainer = document.getElementById("main-container");

// 2nd what to add
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "MY Food list";
section.appendChild(h1);
mainContainer.appendChild(section)


const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "biryani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "borhani";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "kachi";
ul.appendChild(li3);

mainContainer.appendChild(ul);


// create element directly using  innerHTML
const sectionDress = document.createElement("section")
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>T-shirt</li>
    <li>lungi</li>
    <li>shirt</li>
</ul>
`
mainContainer.appendChild(sectionDress);