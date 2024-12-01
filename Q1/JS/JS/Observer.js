// Observer class - all observers will extend this class
class Observer {
    update() {
      throw "You must implement the update method!";
    }
  }
  
  export { Observer };