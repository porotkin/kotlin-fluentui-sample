import ts from 'typescript'
import * as karakum from 'karakum'

export default (node, context) => {
  const typeScriptService = context.lookupService(karakum.typeScriptServiceKey)
  const getParent = typeScriptService?.getParent.bind(typeScriptService) ?? (node => node.parent)

  const callbackParameter = getParent(node)
  if (!callbackParameter) return null
  if (!ts.isParameter(callbackParameter)) return null
  if (!ts.isIdentifier(callbackParameter.name)) return null

  const callbackParameterName = callbackParameter.name.text

  const functionType = getParent(callbackParameter)
  if (!functionType) return null
  if (!ts.isFunctionTypeNode(functionType)) return null

  const property = getParent(functionType)
  if (!property) return null
  if (!ts.isPropertySignature(property)) return null
  if (!ts.isIdentifier(property.name)) return null

  const propertyName = property.name.text

  const typeLiteral = getParent(property)
  if (!typeLiteral) return null
  if (!ts.isTypeLiteralNode(typeLiteral)) return null

  const intersection = getParent(typeLiteral)
  if (!intersection) return null
  if (!ts.isIntersectionTypeNode(intersection)) return null

  const typeAlias = getParent(intersection)
  if (!typeAlias) return null
  if (!ts.isTypeAliasDeclaration(typeAlias)) return null

  const parentName = typeAlias.name.text

  return `${karakum.capitalize(parentName)}${karakum.capitalize(propertyName)}${karakum.capitalize(callbackParameterName)}`
}
