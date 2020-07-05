// const tab = new Tabset(document.getElementById('container'));


// console.log(tab)

// function parsing() {
//     let tabsContainer = document.createElement('div');
//     tabsContainer.className = 'tab';
//     document.body.append(tabsContainer);
//     let tabsInput = Array.from(document.querySelectorAll('.title')).map((el) => el.outerHTML).join(' ');
//     tabsContainer.insertAdjacentHTML("afterbegin", tabsInput);

//     let bodysContainer = document.createElement('div');
//     bodysContainer.className = 'info';
//     document.body.append(bodysContainer);
//     let bodysInput = Array.from(document.querySelectorAll('.body')).map((el) => el.outerHTML).join(' ');
//     bodysContainer.insertAdjacentHTML("afterbegin", bodysInput);
    
//     let removed = document.getElementById('container');
//     removed.remove()
    
//     console.log(tabsInput)
// }

// parsing()
// const up = document.createElement('div');
// up.className = 'tab';
// document.body.before(up);

// const down = document.createElement('div');
// down.className = 'description';
// document.body.after(down);