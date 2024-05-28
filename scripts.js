document.addEventListener('DOMContentLoaded', function () {
    var acc = document.getElementsByClassName('accordion');
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    }
});

// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  const toolSection = document.querySelector('.comparison-tool');
  const comparisonToggle = document.getElementById('comparison-toggle');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50% 0px', // Trigger when the section is 50% out of the viewport
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!comparisonToggle.checked) {
          comparisonToggle.checked = true;
          updateComparison(comparisonToggle.checked);
        }
      } else {
        if (comparisonToggle.checked) {
          comparisonToggle.checked = false;
          updateComparison(comparisonToggle.checked);
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(toolSection);
});