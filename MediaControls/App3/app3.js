const registerServiceWorker = async () => {
    try {
      await navigator.serviceWorker.register('/PWA/MediaControls/App3/sw3.js', { scope: '/PWA/MediaControls/App3/'});
      console.log('Service worker registered');
    } catch (e) {
      console.log(`Registration failed: ${e}`);
    }
}
  
if (navigator.serviceWorker) {
  registerServiceWorker();
}
