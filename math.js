export const isEven = function (num) {
    return (!Number.isInteger(Number(num))) ? false : (String(num).slice(-1) % 2 == 0)
}

export const powerOf = function (num, power) {
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

export const countDigits = function (num) {
    return String(num).length
}

export const percentOf = function (num, percent) {
      return (num * 100) / percent
}

export const average = function (...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += Number(num)
    }
    
    return sum / nums.length
}

export const factorial = function (num) {
    let isInt = num
    for (let i = 1; num - i > 0; i++) {
      isInt *= num - i

      if (isInt == Infinity) {
        return Infinity
      }
    }
    return isInt
}

export const getRandom = function (min = 0, max = 0, isInt = false) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let num = (Math.random() * (max - min + 1)) + min;
    return (isInt) ? Math.round(num) : num
}

export const randomChance = function (chance) {
    if (getRandom(0, 100) <= chance) {
      return true;
    }
    return false;
}
  
export const isMultiple = function (num, multiple) {
    return num % multiple == 0
  }
}

export const quadratic = function (a, b, c) {
    let temp = (b * b) - (4 * a * c)
    if (temp < 0) return `x = ${-b} +- sqrt(${temp})`
    temp = Math.sqrt(temp)
    return `x = { ${((-b) + temp) / (2 * a)}, ${((-b) - temp) / (2 * a)} }`
}
