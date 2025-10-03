Number.prototype.isEven = function (num) {
    return (!Number.isInteger(Number(num))) ? false : (String(num).slice(-1) % 2 == 0)
}

Number.prototype.powerOf = function (num, power) {
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

Number.prototype.CountDigits = function (num) {
    return String(num).length
}

Number.prototype.PercentOf = function (num, percent) {
      return (num * 100) / percent
}

Number.prototype.average = function () {
    let sum = 0;
    let flattend = [...arguments].flat(Infinity);
    for (let i = 0; i < flattend.length; i++) {
        sum += Number(flattend[i])
        numbersCount += 1
    }
    
    return sum / flattend.length
}

Number.prototype.factorial = function (num) {
    let isInt = num
    for (let i = 1; num - i > 0; i++) {
      isInt *= num - i

      if (isInt == Infinity) {
        return Infinity
      }
    }
    return isInt
}

Number.prototype.getRandom = function (min, max, isInt) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let isInt = (Math.random() * (max - min + 1)) + min;
    return (isInt == true) ? Math.round(isInt) : isInt
}
  
Number.prototype.randomChance = function (chance) {
    if (getRandom(0, 100) <= chance) {
      return true;
    }
    
    return false;
}
  
Number.prototype.isMultiple = function (num, multiple) {
    return num % multiple == 0
  }
}

Number.prototype.isMultiple = function quadratic(a, b, c) {
    let temp = (b * b) - (4 * a * c)
    if (temp < 0) return `x = ${-b} +- sqrt(${temp})`
    temp = Math.sqrt(temp)
    return `x = { ${((-b) + temp) / (2 * a)}, ${((-b) - temp) / (2 * a)} }`
  }
