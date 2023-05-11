const registerServiceWorker = async () => {
    try {
      await navigator.serviceWorker.register('/PWA/MediaControls/sw3.js', { scope: '/PWA/MediaControls/'});
      console.log('Service worker registered');
    } catch (e) {
      console.log(`Registration failed: ${e}`);
    }
}
  
if (navigator.serviceWorker) {
  registerServiceWorker();
}
