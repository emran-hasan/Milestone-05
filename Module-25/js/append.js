const placeList = document.getElementById('places-list');

const li = document.createElement('li');
li.innerText = 'Taraban';
placeList.appendChild(li)





// const mainContainer = document.getElementById('main-container');

// const section = document.createElement('section');

// const h1 = document.createElement('h1')
// h1.innerText = 'This is DOM another'
// section.appendChild(h1);

// const ul = document.createElement('ul')
// const li1 = document.createElement('li');
// li1.innerText = 'biriyani';
// ul.appendChild(li1);

// const li2 = document.createElement('li');
// li2.innerText = 'kacchi';
// ul.appendChild(li2);

// const li3 = document.createElement('li');
// li3.innerText = 'lacchi';
// ul.appendChild(li3);

// section.appendChild(ul);

// mainContainer.appendChild(section);

// // other ways

// const sectionDress = document.createElement('section');
// sectionDress.innerHTML = ` <h1>My dress section</h1>
// <ul>
//     <li>T-shirt</li>
//     <li>Lungi</li>
//     <li>shoe</li>
// </ul>`
// mainContainer.appendChild(sectionDress);

const mainContainer =document.getElementById('main-container');

const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'New DOM section';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Pangash Mach';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Katol Mach';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Putimach Mach';
ul.appendChild(li3);

section.appendChild(ul)

mainContainer.appendChild(section);


