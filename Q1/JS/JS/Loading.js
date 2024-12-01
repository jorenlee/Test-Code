class Loading {
    // Show the loading message
    showLoading() {
      const loadingMessage = document.getElementById("loadingMessage");
      if (loadingMessage) {
        loadingMessage.style.display = "block";
      }
    }
  
    // Hide the loading message
    hideLoading() {
      const loadingMessage = document.getElementById("loadingMessage");
      if (loadingMessage) {
        loadingMessage.style.display = "none";
      }
    }
  }
  
  export { Loading };