/**
 * Unity Global Venture Enterprises catalogue – image fallback & print
 */

function ensureImagesReadyForPrint() {
  document.querySelectorAll('#pdf-export-wrapper img').forEach(function (img) {
    img.loading = 'eager';
    if (!img.complete || img.naturalWidth === 0) {
      var src = img.getAttribute('src');
      if (src) {
        img.src = '';
        img.src = src;
      }
    }
  });
}

window.addEventListener('beforeprint', ensureImagesReadyForPrint);

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.product-card img').forEach(function (img) {
    img.addEventListener('error', function () {
      var src = this.getAttribute('src');
      if (src && src.includes('/images/')) {
        this.src = src.replace('/images/', '/');
      }
    });
  });

  var printBtn = document.getElementById('print-catalog');
  if (printBtn) {
    printBtn.addEventListener('click', function () {
      window.print();
    });
  }
});
