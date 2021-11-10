const auth = () => {
	const buttonAuth = document.querySelector('.button-auth');
	const modalAuth = document.querySelector('.modal-auth');
	const buttonOut = document.querySelector('.button-out');
	const userName = document.querySelector('.user-name');
	const closeAuth = document.querySelector('.close-auth');
	const logInForm = document.getElementById('logInForm');
	const inputLogin = document.getElementById('login');
	const inputPassword = document.getElementById('password');

	const TestLogin = (login) => {
		if (/^[a-zA-Z1-9]+$/.test(login) === false) { alert('В логине должны быть только латинские буквы'); return false; }
		if (login.length < 4 || login.length > 20) { alert('В логине должно быть от 4 до 20 символов'); return false; }
		if (parseInt(login.substr(0, 1))) { alert('Логин должен начинатся с буквы'); return false; }
		return true;
	}

	const login = (user) => {
		buttonAuth.style.display = 'none';

		buttonOut.style.display = 'flex';
		userName.style.display = 'flex';

		userName.textContent = user.login;
		modalAuth.style.display = 'none';

		TestLogin(user.login);
	}

	const logout = () => {
		buttonAuth.style.display = 'flex';
		buttonOut.style.display = 'none';
		userName.style.display = 'none';
		userName.textContent = '';
		localStorage.removeItem('user');
	}

	buttonAuth.addEventListener('click', () => {
		modalAuth.style.display = 'flex';
	})

	closeAuth.addEventListener('click', () => {
		modalAuth.style.display = 'none';
	})

	buttonOut.addEventListener('click', () => {
		logout();
	})

	logInForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const user = {
			login: inputLogin.value,
			password: inputPassword.value
		}

		localStorage.setItem('user', JSON.stringify(user));
		login(user);

	})

	if (localStorage.getItem('user')) {
		login(JSON.parse(localStorage.getItem('user')));
	}
}

export default auth;