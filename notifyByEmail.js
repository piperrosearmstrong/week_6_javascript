const notifyByEmail = (emailAddress) => {
  console.log(`Email sent to: ${emailAddress}`);
}

const notifyByText = (phoneNumber) => {
  console.log(`Text sent to: ${phoneNumber}`);
}

const notify = (emailOrPhone, notifyFunction) => {
  return notifyFunction(emailOrPhone);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));