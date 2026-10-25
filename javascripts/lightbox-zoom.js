(function () {
  var scale = 1;

  function getActiveImg(e) {
    var target = e && e.target;
    if (target && target.tagName === 'IMG' && target.closest && target.closest('.gslide-image')) {
      return target;
    }
    var slide = target && target.closest && target.closest('.gslide');
    if (slide) {
      return slide.querySelector('.gslide-image img');
    }
    return document.querySelector('.glightbox-open .gslide-image img');
  }

  function resetZoom() {
    var img = document.querySelector('.glightbox-open .gslide-image img');
    if (img) {
      img.style.transform = '';
      img.style.cursor = '';
      img.style.transformOrigin = '';
    }
    scale = 1;
  }

  document.addEventListener('wheel', function (e) {
    if (!document.querySelector('.glightbox-open')) return;
    var img = getActiveImg(e);
    if (!img) return;
    e.preventDefault();
    e.stopPropagation();
    var delta = e.deltaY * -0.002;
    scale = Math.max(1, Math.min(5, scale + delta));
    img.style.transform = 'scale(' + scale + ')';
    img.style.transformOrigin = 'center center';
    img.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  }, { capture: true, passive: false });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') resetZoom();
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest) return;
    if (e.target.closest('.gclose') || e.target.closest('.gnext') || e.target.closest('.gprev')) {
      resetZoom();
    }
  });

  // 슬라이드 전환 시 zoom 초기화
  document.addEventListener('glightbox-slide-change', resetZoom);
})();
