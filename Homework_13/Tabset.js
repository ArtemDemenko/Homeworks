

class Tabset {
constructor () {
    
    this.tabsContainer = document.createElement('div');
    this.tabsContainer.classList = 'tab';

    this.tabsInput = Array.from(document.querySelectorAll('.title')).map((el) => el.outerHTML).join(' ');
    this.tabsContainer.insertAdjacentHTML("afterbegin", this.tabsInput);
    
    this.bodysContainer = document.createElement('div');
    this.bodysContainer.classList = 'info';
    this.bodysInput = Array.from(document.querySelectorAll('.body')).map((el) => el.outerHTML).join(' ');
    this.bodysContainer.insertAdjacentHTML("afterbegin", this.bodysInput);
        
    this.baseContainer = document.getElementById('container');
    this.baseContainer.remove()
    
    this.newContainer = document.createElement('div');
    this.newContainer.classList = 'toggle';
    document.body.prepend(this.newContainer);
    
    this.newContainer.append(this.tabsContainer, this.bodysContainer)

}

clickOnTab {
    tabsContainer.addEventListener('click', clicked);
}

clicked {
    console.log('clicked')
}
}

const tab = new Tabset(document.getElementById('container'));


// function Tabset(el) {
//     this.container = el;

//     this.init();
// }


// Tabset.TABSET_ELEMENT_CLASS = 'tabset-element';
// Tabset.TABSET_HEADING_CLASS = 'tabset-heading';
// Tabset.TABSET_BODY_CLASS = 'tabset-body';
// Tabset.OPEN_CLASS = 'open';

// Tabset.prototype.init = function () {
// this.changeRegroup ()
// }

// Tabset.prototype.changeRegroup = function() {

// }

// Accordeon.prototype.init = function () {
//     this.initClasses();
//     this.bindEventListener();
// };

// Accordeon.prototype.initClasses = function () {
//     Array.prototype.forEach.call(this.container.children, (el) =>
//         el.classList.add(Accordeon.ACCORDEON_ELEMENT_CLASS)
//     );

//     Array.prototype.forEach.call(
//         this.container.querySelectorAll('.title'),
//         (el) => el.classList.add(Accordeon.ACCORDEON_HEADING_CLASS)
//     );

//     Array.prototype.forEach.call(
//         this.container.querySelectorAll('.body'),
//         (el) => el.classList.add(Accordeon.ACCORDEON_BODY_CLASS)
//     );
// };

// Accordeon.prototype.bindEventListener = function () {
//     this.container.addEventListener('click', (e) => this.onContainerClick(e));
// };

// Accordeon.prototype.onContainerClick = function (e) {
//     if (e.target.classList.contains(Accordeon.ACCORDEON_HEADING_CLASS)) {
//         this.toggleElement(e.target.parentNode);
//     }
// };

// Accordeon.prototype.toggleElement = function (el) {
//     if (el.classList.contains(Accordeon.OPEN_CLASS)) {
//         this.closeElement(el);
//     } else {
//         this.openElement(el);
//     }
// };

// Accordeon.prototype.closeElement = function (el) {
//     el.classList.remove(Accordeon.OPEN_CLASS);
// };

// Accordeon.prototype.closeAllElements = function () {
//     Array.prototype.forEach.call(this.container.children, this.closeElement);
// };

// Accordeon.prototype.openElement = function (el) {
//      el.classList.add(Accordeon.OPEN_CLASS);
// };
