const registerServiceWorker = async () => {
    try {
      await navigator.serviceWorker.register('/PWA/MediaControls/App2/sw2.js', { scope: '/PWA/MediaControls/App2/'});
      console.log('Service worker registered');
    } catch (e) {
      console.log(`Registration failed: ${e}`);
    }
}
  
if (navigator.serviceWorker) {
  registerServiceWorker();
}
