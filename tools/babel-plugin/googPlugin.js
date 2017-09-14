

var fs = require('fs')
var util = require('util')

module.exports = function({ types: t }) {
  return {
    visitor: {
      CallExpression(path, state) {
        var callee = path.node.callee;
        if (t.isMemberExpression(callee) && isGoogRequireCall(callee)) {

        //if (path.node.callee.object.name == 'goog'
        //  && path.node.callee.property.name == 'require'
        //  && path.node.arguments.length == 1){
          state.foundGoogRequireCall = true;  
          var includePath = path.node.arguments[0].value
          // So that it isn't being added to an undefined var
          var namespaces = includePath.split('.')
          for (var i = 1; i < namespaces.length -1; i++){
            var thisNamespaces =  namespaces.slice(0, i + 1)
            //statements.push(`${nextNameSpace} = ${nextNameSpace} || {};`)
            //log(thisNamespaces)
            var namespacePart = generateMemberExpression(thisNamespaces)
            path.insertBefore(
              t.expressionStatement(
                t.assignmentExpression(
                  '=',
                  //t.identifier('goog'),
                  namespacePart,
                  //t.stringLiteral('test')
                  //t.objectExpression([])
                  t.logicalExpression(
                    '||', 
                    namespacePart, 
                    t.objectExpression([])
                  )
                )
              ) 
            );
          }

          //log(includePath)
          //path.scope.generateUidIdentifier("uid");
          //const id = path.scope.generateUidIdentifierBasedOnNode('test');
          //path.remove();
          //path.scope.parent.push({ id, init: path.node });
          //; ${includePath} = require('${includePath}');\n
          //path.insertBefore(t.expressionStatement(t.stringLiteral("Because I'm easy come, easy go.")));
          
          //path.parentPath.replaceWithSourceString(`${declareString}${includePath} = require("${includePath}")`);
          path.parentPath.replaceWithSourceString(`${includePath} = require("${includePath}")`);
          //path.insertBefore(t.variableDeclaration("var", [
          //  t.variableDeclarator("test", path.node) 
          //]))
        }
        if (t.isMemberExpression(callee) && isGoogProvideCall(callee)) {
          var includePath = path.node.arguments[0].value
          var namespaces = includePath.split('.')
          
          for (var i = 1; i < namespaces.length; i++){
            var thisNamespaces =  namespaces.slice(0, i + 1)
            //statements.push(`${nextNameSpace} = ${nextNameSpace} || {};`)
            //log(thisNamespaces)
            var namespacePart = generateMemberExpression(thisNamespaces)
            path.insertBefore(
              t.expressionStatement(
                t.assignmentExpression(
                  '=',
                  //t.identifier('goog'),
                  namespacePart,
                  //t.stringLiteral('test')
                  //t.objectExpression([])
                  t.logicalExpression(
                    '||', 
                    namespacePart, 
                    t.objectExpression([])
                  )
                )
              ) 
            );
          }

          
          path.remove()
          //path.parentPath.replaceWithSourceString(`${includePath} = {}`);
        }

        function generateMemberExpression(namespaces){
          
          if (namespaces.length == 1)
            return t.identifier(namespaces[0])

          if (namespaces.length == 2)
            return t.memberExpression(
              t.identifier(namespaces[0]),
              t.identifier(namespaces[1]),
              false
            )

          
          var last = namespaces[namespaces.length - 1]
          var others = namespaces.slice(0, namespaces.length - 1)

          return t.memberExpression(
            generateMemberExpression(others),
            t.identifier(last),
            false
          )
        }
          
      },
      //Program: {
        /**
         * Wraps the program body in a `goog.loadModule` call, if a
         * `goog.module` call was detected inside it.
         * @param {!NodePath} path
         * @param {!Object} state
         */
        /*exit: function(path, state) {
          if (!state.foundGoogRequireCall) {
            return;
          }

          var contents = path.node.body;
          contents.push(
            t.returnStatement(t.identifier('closureExports'))
          );
          path.node.body = [t.expressionStatement(t.callExpression(
            t.memberExpression(
              t.identifier('goog'),
              t.identifier('loadModule'),
              false
            ),
            [t.functionExpression(
              null,
              [t.identifier('closureExports')],
              t.blockStatement(contents)
            )]
          ))];
        }
      }*/
    }
  };
}

/**
 * Checks if the given member expression is accessing `goog.require`.
 * @param {!MemberExpression} member
 * @return boolean
 */
function isGoogRequireCall(member) {
  return member.object.name === 'goog' && member.property.name === 'require'
}

function isGoogProvideCall(member) {
  return member.object.name === 'goog' && member.property.name === 'provide'
}

function log(message){
  if (typeof message == 'object')
    message = util.inspect(message)
  fs.appendFileSync("log.txt\n", message);
}

