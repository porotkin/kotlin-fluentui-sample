import ts from 'typescript'

export default function (node) {
  if (
    ts.isQualifiedName(node)
    && ts.isIdentifier(node.left)
    && node.left.text === 'React_2'
  ) {
    return ''
  }

  return null
}
