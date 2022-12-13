function Question_1(num1, num2) {
  console.log(`Sum is: ${num1 + num2},\nMultification is: ${num1 * num2}`);
}

function Question_2(amount, coins) {
  let str = "";
  let size = coins.length;
  let i = 0;
  coins = coins.sort((a, b) => {
    return b - a;
  });
  while (i < size) {
    if (amount >= coins[i]) {
      amount -= coins[i];
      str += coins[i] + " ";
    } else {
      i++;
    }
  }
  console.log(str);
}

function Question_3(str) {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) == undefined) {
      map.set(str[i], false);
    } else {
      map.set(str[i], true);
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) == false) {
      console.log(str[i]);
      break;
    }
  }
}

function Question_4() {
  let str = "armstrong numbers are: ";

  for (let i = 100; i < 1000; i++) {
    let firstcube = Math.pow(i % 10, 3);
    let secondcube = Math.pow(Math.floor(i / 10) % 10, 3);
    let thirdcube = Math.pow(Math.floor(i / 100) % 10, 3);

    if (firstcube + secondcube + thirdcube === i) {
      str += i + ", ";
    }
  }
  console.log(str.slice(0, -2));
}

function Question_5(numOfLines) {
  for (let i = 0; i < numOfLines; i++) {
    let str = "* ";
    for (let j = 0; j < i; j++) {
      str += "* ";
    }
    str.slice(0, -1);
    console.log(str);
  }
}

function Question_6() {}

function Question_7() {}

function Question_8() {}

function Question_9() {}

function Question_10() {}
