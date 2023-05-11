const registerServiceWorker = async () => {
    try {
      await navigator.serviceWorker.register('/PWA/MediaControls/App1/sw.js', { scope: '/PWA/MediaControls/App1/'});
      console.log('Service worker registered');
    } catch (e) {
      console.log(`Registration failed: ${e}`);
    }
}
  
if (navigator.serviceWorker) {
  registerServiceWorker();
}
