/**
 * Unity Global Venture Enterprises catalogue – PWA, image fallback & print
 */

var deferredInstallPrompt = null;

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./service-worker.js').catch(function (error) {
      console.warn('Service worker registration failed:', error);
    });
  });
}

function setupInstallPrompt() {
  var installBtn = document.getElementById('install-app');
  if (!installBtn) {
    return;
  }

  window.addEventListener('beforeinstallprompt', function (event) {
    event.preventDefault();
    deferredInstallPrompt = event;
    installBtn.hidden = false;
  });

  installBtn.addEventListener('click', function () {
    if (!deferredInstallPrompt) {
      return;
    }

    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.finally(function () {
      deferredInstallPrompt = null;
      installBtn.hidden = true;
    });
  });

  window.addEventListener('appinstalled', function () {
    deferredInstallPrompt = null;
    installBtn.hidden = true;
  });
}

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
  registerServiceWorker();
  setupInstallPrompt();

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
