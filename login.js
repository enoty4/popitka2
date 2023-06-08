function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const currentUser = users.find(user => user.email === email && user.password === password);
      if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        window.location.href = 'profile.html';
      } else {
        alert('нормально дай');
      }
    } else {
      alert('так лень все заполнить');
    }
  }