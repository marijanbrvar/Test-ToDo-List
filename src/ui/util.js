exports.header = () => {
  const header = document.createElement('div');
  header.classList.add('Header', 'mb-3');
  header.innerHTML = `
    <div class="Header-item">
      <a href="/" class="Header-link">Things need to be done!</a>
    </div>
    `;
  return header;
};