const getNumberSign = (num) => {
  if (num === 0) {
    console.log("zero"); 
  } else if (num > 0 ) {
    console.log("positive");
  } else {
    console.log("negative");
  }
}

module.exports = getNumberSign;