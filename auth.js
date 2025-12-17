// Authentication Management System

// Toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(inputId + '-toggle-icon');
    
    if (input && icon) {
        if (input.type === 'password') {
            // Show password - use eye-closed icon
            input.type = 'text';
            icon.src = 'icon/eye-closed.svg';
            icon.alt = 'Hide password';
        } else {
            // Hide password - use eye icon
            input.type = 'password';
            icon.src = 'icon/eye.svg';
            icon.alt = 'Show password';
        }
    }
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const remember = form.remember?.checked || false;
    
    // Show loader
    if (typeof showLoader === 'function') {
        showLoader('Signing in...');
    }
    
    // Simulate API call
    setTimeout(() => {
        // Hide loader
        if (typeof hideLoader === 'function') {
            hideLoader();
        }
        
        // In a real app, this would make an API call
        // For now, we'll just show success and redirect
        if (typeof showSuccessModal === 'function') {
            showSuccessModal(
                'Login Successful!',
                'Welcome back! Redirecting to your dashboard...',
                () => {
                    // Store login state
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('userEmail', email);
                    
                    // Redirect to home page (in real app, would go to dashboard)
                    window.location.href = 'index.html';
                }
            );
        } else {
            // Fallback if modals aren't loaded
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            window.location.href = 'index.html';
        }
    }, 1500);
}

// Handle signup form submission
function handleSignup(event) {
    event.preventDefault();
    
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const userType = form.userType.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    
    // Validate user type selected
    if (!userType) {
        showErrorModal('Account Type Required', 'Please select whether you are registering as a Farmer or Buyer.');
        return;
    }
    
    // Validate passwords match
    if (password !== confirmPassword) {
        showErrorModal('Password Mismatch', 'Passwords do not match. Please try again.');
        return;
    }
    
    // Validate password strength
    if (password.length < 8) {
        showErrorModal('Weak Password', 'Password must be at least 8 characters long.');
        return;
    }
    
    // Show loader
    if (typeof showLoader === 'function') {
        showLoader('Creating your account...');
    }
    
    // Simulate API call
    setTimeout(() => {
        // Hide loader
        if (typeof hideLoader === 'function') {
            hideLoader();
        }
        
        // In a real app, this would make an API call
        const userTypeText = userType === 'farmer' ? 'Farmer' : 'Buyer';
        showSuccessModal(
            'Account Created!',
            `Your ${userTypeText} account has been successfully created. Redirecting to login...`,
            () => {
                // Store user type
                localStorage.setItem('userType', userType);
                // Redirect to login page
                window.location.href = 'login.html';
            }
        );
    }, 1500);
}

// Handle forgot password form submission
function handleForgotPassword(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.email.value;
    
    // Show loader
    if (typeof showLoader === 'function') {
        showLoader('Sending reset link...');
    }
    
    // Simulate API call
    setTimeout(() => {
        // Hide loader
        if (typeof hideLoader === 'function') {
            hideLoader();
        }
        
        // In a real app, this would send a password reset email
        showSuccessModal(
            'Reset Link Sent!',
            `We've sent a password reset link to ${email}. Please check your inbox.`,
            () => {
                // Redirect to login page
                window.location.href = 'login.html';
            }
        );
    }, 1500);
}

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Get current user email
function getCurrentUser() {
    return localStorage.getItem('userEmail');
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'index.html';
}

// Initialize auth on page load
document.addEventListener('DOMContentLoaded', () => {
    // Update user icon if logged in
    const userIcon = document.querySelector('.navbar-icon-btn[aria-label="User account"]');
    if (userIcon && isLoggedIn()) {
        const userEmail = getCurrentUser();
        // In a real app, you might show user's name or avatar
        userIcon.setAttribute('aria-label', `User account: ${userEmail}`);
    }
});

