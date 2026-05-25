// Admin Panel Shared JS
(function() {
  // Feedback FAB for frontend
  if (window.location.pathname.includes('/admin/')) return;

  const fab = document.createElement('button');
  fab.className = 'feedback-fab';
  fab.innerHTML = '&#9993;';
  fab.title = 'Send Feedback';
  document.body.appendChild(fab);

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal">
      <button class="btn-close">&times;</button>
      <h3>Send Feedback</h3>
      <p>We'd love to hear your suggestions or report issues.</p>
      <div class="success-msg" id="successMsg">Thank you! Your feedback has been submitted.</div>
      <div class="form-group">
        <label>Your Name</label>
        <input type="text" id="fbName" placeholder="John Doe" required>
      </div>
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" id="fbEmail" placeholder="you@example.com" required>
      </div>
      <div class="form-group">
        <label>Your Message</label>
        <textarea id="fbMessage" placeholder="What would you like to tell us?" required></textarea>
      </div>
      <div class="modal-actions">
        <button class="btn btn-outline" id="cancelBtn">Cancel</button>
        <button class="btn btn-primary" id="submitBtn">Submit Feedback</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  fab.addEventListener('click', () => {
    modal.classList.add('show');
    document.getElementById('fbName').focus();
  });

  modal.querySelector('.btn-close').addEventListener('click', () => modal.classList.remove('show'));
  document.getElementById('cancelBtn').addEventListener('click', () => modal.classList.remove('show'));

  document.getElementById('submitBtn').addEventListener('click', async function() {
    const name = document.getElementById('fbName').value.trim();
    const email = document.getElementById('fbEmail').value.trim();
    const message = document.getElementById('fbMessage').value.trim();
    if (!name || !email || !message) {
      alert('Please fill all fields');
      return;
    }

    const feedback = {
      id: Date.now(),
      name,
      email,
      message,
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    };

    try {
      // Try to save to admin data
      const res = await fetch('/admin/data/feedback-data.json');
      let existing = [];
      try { existing = await res.json(); } catch {}
      existing.push(feedback);
      
      // In a real app, you'd POST to an API. For demo, we just show success.
      document.getElementById('successMsg').style.display = 'block';
      setTimeout(() => {
        modal.classList.remove('show');
        document.getElementById('successMsg').style.display = 'none';
        document.getElementById('fbName').value = '';
        document.getElementById('fbEmail').value = '';
        document.getElementById('fbMessage').value = '';
        fab.innerHTML = '&#10003;';
        setTimeout(() => fab.innerHTML = '&#9993;', 2000);
      }, 1500);
    } catch(e) {
      alert('Failed to submit. Please try again.');
    }
  });
})();