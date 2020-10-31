"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoComponent = void 0;
//Variaveis e funções = camelCase
//Classes = PascalCase
//Export é tipo um public do C# (tem algumas diferenças). Assim ela pode ser acessada por outros componentes. 
var ProdutoComponent = /** @class */ (function () {
    function ProdutoComponent() {
    }
    ProdutoComponent.prototype.obterNome = function () {
        return this.nome;
    };
    return ProdutoComponent;
}());
exports.ProdutoComponent = ProdutoComponent;
//# sourceMappingURL=produto.component.js.map