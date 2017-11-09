// moriscript.js
module.exports = function(babel) {
  var t = babel.types;
  return {
    visitor: {
      ArrayExpression: function(path) {
        path.replaceWith(
          t.callExpression(
            t.memberExpression(t.identifier('mori'), t.identifier('vector')),
            path.node.elements
          )
        );
        //path.insertBefore(
        //  t.variableDeclaration(
        //    'var',
        //    [t.variableDeclarator(t.identifier('foo'))]
        //  )
        //);
      },
      VariableDeclaration: function(path) {
        //const variableDeclarations = t.variableDeclarator(t.identifer('foo'));
        if (path.node.isClean) { return; }
        //path.insertAfter(
        //  t.expressionStatement(t.stringLiteral('hello there!'))
        //);
        var expr = t.variableDeclaration('var', [t.variableDeclarator(t.identifier('foo'))]);
        expr.isClean = true;
        path.insertBefore(
          expr
        );
      },
    }
  };
};
