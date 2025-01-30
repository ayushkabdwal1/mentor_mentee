// Handle Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      expertise: document.getElementById('expertise').value,
      phone: document.getElementById('phone').value,
    };
  
    // Send data to backend
    try {
      const response = await fetch('http://localhost:5000/api/mentors/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Signup Successful:', data);
        alert('Signup Successful! Redirecting to login...');
        window.location.href = 'mentor-login.html'; // Redirect to login page
      } else {
        const errorData = await response.json();
        console.error('Signup Failed:', errorData.message);
        alert(`Signup Failed: ${errorData.message}`);
      }
    } catch (err) {
      console.error('Error during signup:', err);
      alert('An error occurred. Please try again.');
    }
  });