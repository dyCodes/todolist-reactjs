import React from 'react';

function Header() {
	// const [style, setStyle] = useState();

	const onClick = () => {
		if (document.body.dataset.theme === 'light') {
			document.body.dataset.theme = 'dark';
		} else {
			document.body.dataset.theme = 'light';
		}
		// setStyle({ transform: ' rotate(0)' });
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
