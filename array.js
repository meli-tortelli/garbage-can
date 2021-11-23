const wrongDataFormat = [
  'preto-PP',
  'preto-M',
  'preto-G',
  'preto-GG',
  'preto-GG',
  'branco-PP',
  'branco-G',
  'vermelho-M',
  'azul-XG',
  'azul-XG',
  'azul-XG',
  'azul-P',
]

const correctDataFormat = wrongDataFormat.reduce((acc, colorAndSize) => {
  const [color, size] = colorAndSize.split('-')

  acc[color] = acc[color] || {}
  acc[color][size] = acc[color][size] || 0
  acc[color][size] += 1

  return acc
}, {})

console.log(correctDataFormat)
