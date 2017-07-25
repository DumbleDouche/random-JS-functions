'use strict'

const abs = n => n < 0 ? -n : n

const splitDigits = (num, base) => (ret => (
  (abs(num) > 9
    ? ret = (splitDigits((num / base) | 0, base))
    : (num < 0) && ret.push(16)),
  ret.push(abs(num) % base),
  ret
))([])

const lcdPrint = (num, base) => {
  const set = [
    [ ' _ ', '| |', '|_|' ],
    [ '   ', '  |', '  |' ],
    [ ' _ ', ' _|', '|_ ' ],
    [ ' _ ', ' _|', ' _|' ],
    [ '   ', '|_|', '  |' ],
    [ ' _ ', '|_ ', ' _|' ],
    [ ' _ ', '|_ ', '|_|' ],
    [ ' _ ', '  |', '  |' ],
    [ ' _ ', '|_|', '|_|' ],
    [ ' _ ', '|_|', ' _|' ],
    [ ' _ ', '|_|', '| |' ],
    [ '   ', '|_ ', '|_|' ],
    [ ' _ ', '|  ', '|_ ' ],
    [ '   ', ' _|', '|_|' ],
    [ ' _ ', '|_ ', '|_ ' ],
    [ ' _ ', '|_ ', '|  ' ],
    [ '   ', ' _ ', '   ' ],
  ]
  const digits = splitDigits(num, base)

  console.log(digits.map(val => set[val][0])
    .reduce((accu, val) => accu += val))
  console.log(digits.map(val => set[val][1])
    .reduce((accu, val) => accu += val))
  console.log(digits.map(val => set[val][2])
    .reduce((accu, val) => accu += val))
}

lcdPrint(255, 10)

// Not perfect but does the job