import { Observer } from '../JS/Observer.js';

class Communication {
  constructor() {
    this.observers = [];
  }

  // Attach an observer
  attach(observer) {
    if (observer instanceof Observer) {
      this.observers.push(observer);
    } else {
      console.error("Observer must be an instance of Observer");
    }
  }

  // Notify all observers
  notifyObservers(message) {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }

  // Simulate the post method (communication)
  post(data) {
    // Notify observers that the communication has started
    this.notifyObservers("Communication started");

    // Simulate some processing (e.g., network request)
    setTimeout(() => {
      // Notify observers that the communication has finished
      this.notifyObservers("Communication finished");
    }, 2000); // 2 seconds delay to simulate communication
  }
}

export { Communication };