document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const statusBox = document.getElementById('statusMessage');
    const submitBtn = document.getElementById('submitBtn');

    // UI Loading State
    statusBox.classList.remove('hidden', 'success');
    statusBox.classList.add('loading');
    statusBox.innerText = 'Sending message to AI Responder...';
    submitBtn.disabled = true;

    // Yahan apna n8n Production Webhook URL lagayein
    fetch('http://localhost:5678/webhook/oura-lead', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ name, email, subject, message })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Server error');
        }
        statusBox.classList.remove('loading');
        statusBox.classList.add('success');
        statusBox.innerText = `Thank you, ${name}! Your email has been received. Our AI responder is processing your request.`;
        document.getElementById('emailForm').reset();
        submitBtn.disabled = false;
    })
    .catch(error => {
        statusBox.classList.remove('loading');
        statusBox.innerText = 'Failed to send message. Please check n8n workflow.';
        submitBtn.disabled = false;
    });
});
