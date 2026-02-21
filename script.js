/**
 * Premium Tape Catalogue - PDF Export & Image Fallback
 * Uses html2pdf.js to export the catalogue as PDF
 */

document.addEventListener('DOMContentLoaded', function () {
  // If images fail to load (e.g. wrong folder), try loading from root
  document.querySelectorAll('.product-card img').forEach(function (img) {
    img.addEventListener('error', function () {
      var src = this.getAttribute('src');
      if (src && src.includes('/images/')) {
        this.src = src.replace('/images/', '/');
      }
    });
  });

  const btn = document.getElementById('download-pdf');

  if (!btn) return;

  var printBtn = document.getElementById('print-pdf');
  if (printBtn) {
    printBtn.addEventListener('click', function () {
      window.print();
    });
  }

  btn.addEventListener('click', function () {
    if (typeof html2pdf === 'undefined') {
      alert('PDF export is not available. Please check your connection and try again.');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Generating PDF...';

    var wrapper = document.getElementById('pdf-export-wrapper');
    if (!wrapper) wrapper = document.body;

    var opt = {
      margin: 10,
      filename: 'Premium-Tape-Catalogue-February-2026.pdf',
      image: { type: 'jpeg', quality: 0.85 },
      html2canvas: {
        scale: 1,
        useCORS: false,
        logging: false,
        windowWidth: wrapper.scrollWidth
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
      .set(opt)
      .from(wrapper)
      .save()
      .then(function () {
        btn.disabled = false;
        btn.textContent = 'Download Catalogue as PDF';
      })
      .catch(function (err) {
        console.error('PDF export failed:', err);
        alert('PDF export failed. Try using the browser\'s Print option (Ctrl+P) and choose "Save as PDF" instead.');
        btn.disabled = false;
        btn.textContent = 'Download Catalogue as PDF';
      });
  });
});
