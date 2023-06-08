function registerUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const country = document.getElementById('country').value;
    const birthday = document.getElementById('birthday').value;
    if (email && password && name && country && birthday) {
      let users = JSON.parse(localStorage.getItem('users')) || [];
      if (!users.find(user => user.email === email)) {
        users.push({email, password, name, country, birthday});
        localStorage.setItem('users', JSON.stringify(users));
        alert("легенда");
        window.location.href = 'login.html';
      } else {
        alert('что за наеб,тебя нету');
      }
    } else {
      alert('да тебе лень что ли?');
    }
  }
  