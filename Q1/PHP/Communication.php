<?php
// Include the Observer interface
require_once 'Observer.php';

class Communication {
    private $observers = [];

    // Attach an observer
    public function attach(Observer $observer) {
        $this->observers[] = $observer;
    }

    // Notify all observers
    public function notifyObservers(string $message) {
        foreach ($this->observers as $observer) {
            $observer->update($message);
        }
    }

    // Simulate a "post" method
    public function post(string $data) {
        // Notify observers that the communication has started
        $this->notifyObservers("Communication started");

        // Simulate some processing (e.g., network request)
        sleep(2);  // Delay to simulate processing

        // Notify observers that the communication has finished
        $this->notifyObservers("Communication finished");
    }
}