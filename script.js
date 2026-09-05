<<<<<<< HEAD
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
=======
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}
>>>>>>> 52d1a9886d42ccc995ef1fdfa18bd9bdbbb94ce5

<<<<<<< HEAD
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const statusBox = document.getElementById('statusMessage');
    const submitBtn = document.getElementById('submitBtn');

    // Loading State
    statusBox.classList.remove('hidden', 'success');
    statusBox.classList.add('loading');
    statusBox.innerText = 'Sending message to AI Responder...';
    submitBtn.disabled = true;

    fetch('http://localhost:5678/webhook/oura-lead', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ name, email, subject, message })
    })
    .then(response => {
        statusBox.classList.remove('loading');
        statusBox.classList.add('success');
        statusBox.innerText = `Thank you, ${name}! Your email has been received. Our AI responder is processing your request.`;
        document.getElementById('emailForm').reset();
        submitBtn.disabled = false;
    })
    .catch(error => {
        statusBox.classList.remove('loading');
        statusBox.innerText = 'Failed to send message. Please try again.';
        submitBtn.disabled = false;
    });
});
=======
body {
    background-color: #0d0f17;
    color: #e2e8f0;
    line-height: 1.6;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    background: rgba(13, 15, 23, 0.8);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
}

.logo span {
    color: #6366f1;
}

nav a {
    color: #94a3b8;
    text-decoration: none;
    margin-left: 20px;
    transition: 0.3s;
}

nav a:hover {
    color: #fff;
}

.btn-nav {
    background: #6366f1;
    color: #fff !important;
    padding: 8px 18px;
    border-radius: 6px;
}

/* Hero Section */
.hero {
    text-align: center;
    padding: 100px 20px 60px;
    max-width: 800px;
    margin: 0 auto;
}

.badge {
    background: rgba(99, 102, 241, 0.15);
    color: #818cf8;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    border: 1px solid rgba(99, 102, 241, 0.3);
}

.hero h1 {
    font-size: 2.8rem;
    margin: 20px 0;
    color: #fff;
}

.hero h1 span {
    color: #6366f1;
}

.hero p {
    color: #94a3b8;
    font-size: 1.1rem;
    margin-bottom: 30px;
}

.btn-primary {
    background: #6366f1;
    color: #fff;
    padding: 12px 28px;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    display: inline-block;
    transition: 0.3s;
}

.btn-primary:hover {
    background: #4f46e5;
}

/* Features */
.features {
    padding: 60px 8%;
    text-align: center;
}

.features h2 {
    font-size: 2rem;
    margin-bottom: 40px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.card {
    background: #1e293b;
    padding: 30px;
    border-radius: 12px;
    border: 1px solid #334155;
}

.card .icon {
    font-size: 2rem;
    margin-bottom: 15px;
}

.card h3 {
    margin-bottom: 10px;
    color: #f8fafc;
}

.card p {
    color: #94a3b8;
    font-size: 0.95rem;
}

/* Contact Form */
.contact-section {
    padding: 80px 20px;
    display: flex;
    justify-content: center;
}

.form-container {
    background: #1e293b;
    padding: 40px;
    border-radius: 16px;
    width: 100%;
    max-width: 500px;
    border: 1px solid #334155;
}

.form-container h2 {
    margin-bottom: 10px;
    text-align: center;
}

.form-container p {
    color: #94a3b8;
    font-size: 0.9rem;
    text-align: center;
    margin-bottom: 25px;
}

.input-group {
    margin-bottom: 18px;
}

.input-group label {
    display: block;
    margin-bottom: 6px;
    font-size: 0.85rem;
    color: #cbd5e1;
}

.input-group input, 
.input-group textarea {
    width: 100%;
    padding: 10px 14px;
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 6px;
    color: #fff;
    outline: none;
}

.input-group input:focus, 
.input-group textarea:focus {
    border-color: #6366f1;
}

.btn-submit {
    width: 100%;
    padding: 12px;
    background: #6366f1;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
}

.btn-submit:hover {
    background: #4f46e5;
}

/* Status Box */
.status-box {
    margin-top: 20px;
    padding: 12px;
    border-radius: 6px;
    text-align: center;
    font-size: 0.9rem;
}

.status-box.success {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border: 1px solid rgba(34, 197, 94, 0.4);
}

.status-box.loading {
    background: rgba(99, 102, 241, 0.2);
    color: #818cf8;
    border: 1px solid rgba(99, 102, 241, 0.4);
}

.hidden {
    display: none;
}

footer {
    text-align: center;
    padding: 20px;
    color: #64748b;
    font-size: 0.85rem;
    border-top: 1px solid #1e293b;
}

>>>>>>> 52d1a9886d42ccc995ef1fdfa18bd9bdbbb94ce5