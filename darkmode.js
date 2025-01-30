function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  }
  
  // Load saved theme
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }