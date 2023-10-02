function Bola(cor, tamanho, estoqueMinimo){
    this.cor = cor;
    this.tamanho = tamanho;    
    let _estoqueMinimo = 50;

    this.getEstoqueMinimo = function() {
        return _estoqueMinimo;
    }
}

function BolaFutebol(esporte, cor, tamanho, estoque, preco) {    
    Bola.call(this, cor, tamanho);
    this.esporte = 'futebol'; 
    this.estoque = estoque;
    this.preco = preco; 
    
    this.entradaEstoque = function() {
        qtdeProduzida = 60;
        const novoEstoque = this.estoque + qtdeProduzida;
        this.estoque = novoEstoque;
        console.log('O estoque de bolas de futebol após a produção é de: ' + novoEstoque);
    }

    this.saidaEstoque = function() {
        qtdeVenda = 460;
        const novoEstoque = this.estoque - qtdeVenda;
        this.estoque = novoEstoque;
        console.log('O estoque de bolas de futebol após as vendas é de: ' + novoEstoque + ' bolas');
    }

    this.alertaEstoque = function () {
        const estoqueMinimo = this.getEstoqueMinimo();     

        if (this.estoque < estoqueMinimo) {
            console.log('ATENÇÃO! ESTOQUE MÍNIMO DE BOLAS DE FUTEBOL ATINGIDO!');
        }
    }
}

function BolaVolei(esporte, cor, tamanho, estoque, preco) {    
    Bola.call(this, cor, tamanho);
    this.esporte = 'volei'; 
    this.estoque = estoque;
    this.preco = preco;    

    this.entradaEstoque = function() {
        qtdeProduzida = 60;
        const novoEstoque = this.estoque + qtdeProduzida;
        this.estoque = novoEstoque;
        console.log('O estoque de bolas de volei após a produção é de: ' + novoEstoque);
    }

    this.saidaEstoque = function() {
        qtdeVenda = 460;
        const novoEstoque = this.estoque - qtdeVenda;
        this.estoque = novoEstoque;
        console.log('O estoque de bolas de volei após as vendas é de: ' + novoEstoque + ' bolas');
    }

    this.alertaEstoque = function () {
        const estoqueMinimo = this.getEstoqueMinimo();     

        if (this.estoque < estoqueMinimo) {
            console.log('ATENÇÃO! ESTOQUE MÍNIMO DE BOLAS DE FUTEBOL ATINGIDO!');
        }
    }
}

const bolafutebol1 = new BolaFutebol('futebol', "branca", "oficial", 500, 120);
const bolavolei1 = new BolaVolei('volei', 'amarela', 'juvenil', 400, 110);

bolafutebol1.saidaEstoque();
bolafutebol1.alertaEstoque();
bolavolei1.entradaEstoque();