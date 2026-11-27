(function () {
  // 왼쪽 메뉴가 숨겨진 페이지(frontmatter의 hide: navigation)에만 적용
  if (!document.querySelector('.md-sidebar--primary[hidden]')) return;

  var root = document.documentElement;

  function createButton(label, iconPath, getTop) {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'scroll-buttons__button';
    button.setAttribute('data-tooltip', label);
    button.setAttribute('aria-label', label);
    button.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + iconPath + '"/></svg>';
    button.addEventListener('click', function () {
      var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: getTop(), behavior: reduceMotion ? 'auto' : 'smooth' });
    });
    return button;
  }

  var container = document.createElement('div');
  container.className = 'scroll-buttons';
  container.hidden = true;
  container.appendChild(createButton('맨 위로 이동', 'M12 20V4M5 11l7-7 7 7', function () {
    return 0;
  }));
  container.appendChild(createButton('맨 아래로 이동', 'M12 4v16M5 13l7 7 7-7', function () {
    return root.scrollHeight;
  }));
  document.body.appendChild(container);
  document.body.classList.add('has-scroll-buttons');

  // 스크롤할 내용이 있을 때만 표시
  function updateVisibility() {
    container.hidden = root.scrollHeight <= root.clientHeight;
  }

  window.addEventListener('resize', updateVisibility);
  if (window.ResizeObserver) {
    new ResizeObserver(updateVisibility).observe(document.body);
  }
  updateVisibility();
})();
