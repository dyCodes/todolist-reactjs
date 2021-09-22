import React from 'react';

function Header() {
	const onClick = () => {
		// TOGGLE LIGHT/DARK MODE
		let htmlDataSet = document.body.parentElement.dataset;
		let userMode = htmlDataSet.theme;
		htmlDataSet.theme = userMode === 'light' ? 'dark' : 'light';
		// SAVE SELECTED THEME MODE
		localStorage.setItem('theme', htmlDataSet.theme);
	};

	return (
		<nav>
			<h1>
				<a href="/">Todo List</a>
			</h1>
			<div className="mode_icon">
				<input type="checkbox" name="" id="mood" />
				<label htmlFor="mood" onClick={onClick}>
					<i className="fa fa-moon-o"></i>
					<i className="fa fa-sun-o"></i>
					<div className="ball"></div>
				</label>
			</div>
		</nav>
	);
}

// FECTH AND SET THEME MODE
(function() {
	let color_theme = localStorage.getItem('theme');
	if (color_theme) {
		document.body.parentElement.dataset.theme = color_theme;
	} else {
		localStorage.setItem('theme', 'light');
	}
})();

export default Header;
