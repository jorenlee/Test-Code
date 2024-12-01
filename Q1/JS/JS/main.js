import { Communication } from '../JS/Communication.js';
import { LoadingObserver } from '../JS/LoadingObserver.js';

// Create the Communication instance
const communication = new Communication();

// Create the LoadingObserver and attach it to the Communication instance
const loadingObserver = new LoadingObserver();
communication.attach(loadingObserver);

// Add event listener to the button to start communication
const button = document.getElementById("startCommunicationButton");
button.addEventListener("click", () => {
  communication.post("Sending some data...");
});