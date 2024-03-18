function toCase(text) {
    // write your code here
      let arr = [text.toLowerCase() , text.toUpperCase()];
      return arr.join('-');
  }

// DO not change the code below

// const text = prompt("Enter text:");
alert(toCase(text));
