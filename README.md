# keysmash

a believable keysmash generator

## installation

```bash
npm install keysmash
```

## usage

```ts
import keysmash from 'keysmash'

const k = keysmash(15)
// k: ahjdadsgdjdkdgf
```

you can also pass additional options:

```ts
keysmash(15, {
  rerollChance: 0.9,
  startsWithAChance: 0.4,
})
```

## references

- Ygartua, H. (2018). Linguistic Feature Spread in Online Social Networks (thesis) [[link](https://scholarsbank.uoregon.edu/xmlui/bitstream/handle/1794/24149/Final%20Thesis-Ygartua.pdf)]
