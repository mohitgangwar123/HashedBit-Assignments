
function swapTheme() {
    const body = document.body;

    if (body.classList.contains('light')) {
      body.classList.replace('light', 'dark');
    } else {
      body.classList.replace('dark', 'light');
    }
  }

  document.getElementById('toggleBtn').addEventListener('click', swapTheme);