<?php
// Include all required classes
require_once 'Communication.php';
require_once 'LoadingObserver.php';
require_once 'Loading.php';

// Create the Loading class instance
$loading = new Loading();

// Create the LoadingObserver and attach it to the Loading instance
$loadingObserver = new LoadingObserver($loading);

// Create the Communication class instance
$communication = new Communication();

// Attach the observer to the Communication instance
$communication->attach($loadingObserver);

// Trigger the post method, which will notify observers
$communication->post("Sending some data...");