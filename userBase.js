const User = require('./user');

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

class UserBase {
  constructor(array) {
    this.array = array;
  }

  count() {
    return this.array.length;
  }

  getNames() {
    return this.array.map((element) => {
      return element.getName()
    });
  }

  getIntroductions() {
    return this.array.map((element) => {
      return element.getIntroduction()
    });
  }
}

const userBase = new UserBase(users);

console.log(userBase.count());
console.log(userBase.getNames());
console.log(userBase.getIntroductions());

module.exports = UserBase;
