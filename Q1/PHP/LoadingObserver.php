<?php
// Include the Observer interface and Loading class
require_once 'Observer.php';
require_once 'Loading.php';

class LoadingObserver implements Observer {
    private $loading;

    public function __construct(Loading $loading) {
        $this->loading = $loading;
    }

    // Update method called when the communication starts or finishes
    public function update(string $message) {
        if ($message === "Communication started") {
            $this->loading->showLoading();
        } elseif ($message === "Communication finished") {
            $this->loading->hideLoading();
        }
    }
}