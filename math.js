function isEven(num) {
    return (!Number.isInteger(Number(num))) ? false : (String(num).slice(-1) % 2 == 0)
}

function powerOf(num, power) {
    let isInt = num

    if (isNaN(num) == false && isNaN(power) == false) {
      for (let i = 1; i < power; i++) {
        isInt *= num
        if (isInt == Infinity) return Infinity
      }
      return isInt
    } else {
      return NaN
    }
}

function countDigits(num) {
    return String(num).length
}

function percentOf(num, percent) {
      return (num * 100) / percent
}

function average(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += Number(num)
    }
    
    return sum / nums.length
}

function factorial(num) {
    let isInt = num
    for (let i = 1; num - i > 0; i++) {
      isInt *= num - i

      if (isInt == Infinity) {
        return Infinity
      }
    }
    return isInt
}

function getRandom(min, max, isInt) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let isInt = (Math.random() * (max - min + 1)) + min;
    return (isInt == true) ? Math.round(isInt) : isInt
}

function randomChance(chance) {
    if (getRandom(0, 100) <= chance) {
      return true;
    }
    return false;
}
  
function isMultiple(num, multiple) {
    return num % multiple == 0
  }
}

function quadratic(a, b, c) {
    let temp = (b * b) - (4 * a * c)
    if (temp < 0) return `x = ${-b} +- sqrt(${temp})`
    temp = Math.sqrt(temp)
    return `x = { ${((-b) + temp) / (2 * a)}, ${((-b) - temp) / (2 * a)} }`
}
