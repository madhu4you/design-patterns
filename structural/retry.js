/**
 * Retry Pattern
 *
 * Strategy
 * 1. Don't
 * 2. Retry Immediatly
 * 3. Retry after delay
 */

function RetryOperation() {
  currentTry = 0;
  while (true) {
    try {
      externalServiceCall();
      console.log("Success.");
      break;
    } catch (err) {
      currentTry++;
      console.log(`Failed Attempt ${currentTry}`);
      if (currentTry >= 3) {
        console.log(`Retry maximum reached. Existing`);
        break;
      }
    }
  }
}

function externalServiceCall() {
  //return true;
  console.log("Calling External Service");
  const shouldPass = Math.random() < 0.5;
  if (shouldPass) return true;
  else throw "Failure";
}

RetryOperation();
