function Contador(valorInicial) {
    // completar...
    this.valor = valorInicial || 0
}
  
  // Contador.prototype... (completar)

  Contador.prototype.incrementar = function () {
    this.valor++
  }

  Contador.prototype.decrementar = function () {
    this.valor--
  }

  Contador.prototype.reset = function () {
    this.valor = 0
  }

  Contador.prototype.mostrarValor = function () {
    console.log(`Valor Actual: ${this.valor}`)
  }
  
  const miContador = new Contador();
  
  // (**) punto de control para el diagrama VV
  
  miContador.incrementar();
  miContador.incrementar();
  miContador.incrementar();
  console.log(miContador.mostrarValor());  // Debería imprimir: 3
  
  miContador.decrementar();
  console.log(miContador.mostrarValor());  // Debería imprimir: 2
  
  miContador.reset();
  console.log(miContador.mostrarValor());  // Debería imprimir: 0
  