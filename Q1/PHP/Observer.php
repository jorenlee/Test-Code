<?php
// Observer interface that will be implemented by all concrete observers
interface Observer {
    public function update(string $message);
}