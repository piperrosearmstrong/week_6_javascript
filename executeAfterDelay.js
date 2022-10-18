const executeAfterDelay = (delay, callbackFunction) => {
  setTimeout(callbackFunction, delay * 1000);
}

module.exports = executeAfterDelay;