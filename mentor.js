// Handle Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      expertise: document.getElementById('expertise').value,
      phone: document.getElementById('phone').value,
    };
    console.log('Signup Data:', formData);
    alert('Signup Successful! Redirecting to login...');
    window.location.href = 'mentor-login.html'; // Redirect to dashboard
  });
  
  
