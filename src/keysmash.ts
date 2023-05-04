// https://scholarsbank.uoregon.edu/xmlui/bitstream/handle/1794/24149/Final%20Thesis-Ygartua.pdf
const chars = 'djsfkhgalnbmewr'
const weights = [2990, 2877, 2594, 2562, 2246, 2017, 1630, 1313, 1223, 1043, 662, 450, 349, 283, 262]

const keysmash = (
  length: number,
  options = {
    /**
     * the chance that the keysmash starts with 'a'
     * @default 0.4
     */
    startsWithAChance: 0.4,

    /**
     * the chance that a character gets rerolled if it is the same as the previous character
     * @default 0.9
     */
    rerollChance: 0.9,
  }
) => {
  let result = Math.random() < options.startsWithAChance ? 'a' : ''
  let pre = ''
  let cur = ''
  for (let i = result.length; i < length; i++) {
    pre = cur
    cur = chars[weightedRandom(weights)!]

    // if c is the same as the last character, maybe reroll
    if (cur === pre) {
      if (Math.random() < options.rerollChance) {
        i--
        continue
      }
    }

    result += cur
  }

  return result
}

const weightedRandom = (weights: number[]) => {
  const random = Math.floor(Math.random() * weights.reduce((a, b) => a + b))

  let sum = 0
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i]
    if (random < sum) {
      return i
    }
  }
}

export default keysmash
