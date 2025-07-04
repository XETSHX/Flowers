window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const flowers = document.querySelectorAll('.flower');

    flowers.forEach(flower => {
        flower.addEventListener('animationend', (e) => {
            if (e.animationName === 'grow') {
                const heart = document.createElement('div');
                heart.classList.add('white-heart');
                heart.textContent = '♥';

                // Get flower position and size
                const rect = flower.getBoundingClientRect();

                // Position heart horizontally centered above flower's top edge
                heart.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
                heart.style.top = `${rect.top + window.scrollY - 10}px`; // 10px above flower top

                document.body.appendChild(heart);

                // Hearts stay visible, no removal
            }
        });
    });

};
