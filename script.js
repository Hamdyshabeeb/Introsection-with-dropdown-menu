// mobile navigation
const menuOpenBtn = document.querySelector('.menu-open');
const menuCloseBtn = document.querySelector('.menu-close');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const dropdownMenus = document.querySelectorAll('.drop-down-list');
const dropdownButtons = document.querySelectorAll('.drop-down-button');

// event Listener mobile navigation
menuOpenBtn.addEventListener('click', mobileNav);
menuCloseBtn.addEventListener('click', mobileNav);
overlay.addEventListener('click', mobileNav);
dropdownButtons.forEach((button) => {
	button.addEventListener('click', dropDownMobile);
});

//controle silder menu in mobile view
function mobileNav(e) {
	menu.classList.toggle('open');
	closeAllDropDownMenu();
}
// controle on dropdown behavior
function dropDownMobile(e) {
	/**
	 * @type {HTMLButtonElement}
	 */
	const whichButton = e.currentTarget;
	// check if current button is already opened then exit execution
	if (whichButton.nextElementSibling.classList.contains('open')) {
		closeAllDropDownMenu();
		return;
	}
	// close all active dropdown list;
	closeAllDropDownMenu();
	// open the sibling menu to current button
	openSiblingMenu(whichButton);
}
// colapse all dropdown menus and remove active class from menu buttons
function closeAllDropDownMenu() {
	dropdownMenus.forEach((menu) => {
		menu.classList.remove('open');
	});
	dropdownButtons.forEach((button) => {
		button.classList.remove('active');
	});
}
/**
 *
 * @param {HTMLButtonElement} currentButton
 */
function openSiblingMenu(currentButton) {
	currentButton.classList.add('active');
	currentButton.nextElementSibling.classList.add('open');
}
