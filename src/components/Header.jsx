import React from 'react';

function Header() {
	const onClick = () => {
		// TOGGLE LIGHT/DARK MODE
		let userMode = document.body.parentElement.dataset.theme;
		document.body.parentElement.dataset.theme =
			userMode === 'light' ? 'dark' : 'light';
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

export default Header;
