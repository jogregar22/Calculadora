class Display{
    constructor(displayanterior, displayactual){
        this.displayactual = displayactual;
        this.displayanterior = displayanterior;
        this.calculos = new Calculos();
        this.tipoOperacion = undefined;
        this.valoractual = '';
        this.valoranterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: 'x',
            dividir: String.fromCharCode(251),
            raiz: '√',
            pote_n: 'n'
        }
    }

    borrar(){
        this.valoractual = this.valoractual.toString().slice(0,-1);
        this.imprimirValores()
    }

    borrartodo(){
        this.valoractual = '';
        this.valoranterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero == "." && this.valoractual.includes('.')) return
        this.valoractual = this.valoractual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayactual.textContent = this.valoractual;
        this.displayanterior.textContent = `${this.valoranterior} ${this.signos[this.tipoOperacion] || ''}`;
    }
    
    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
 
        if (tipo == 'raiz_2' || tipo == 'raiz_3' || tipo == 'pote_2' || tipo == 'pote_3' || tipo =='fact_0'){
            this.tipoOperacion = tipo.substring(0,4);
            this.valoranterior = tipo.substring(5,6);
            this.calcular();
            this.valoranterior=this.valoractual;
            this.valoractual = '';
            this.tipoOperacion = '';
            this.imprimirValores();
            this.valoranterior = '';
        }else {
            this.tipoOperacion = tipo;
            this.valoranterior = this.valoractual || this.valoranterior;
            this.valoractual = '';
            this.imprimirValores();
        }
    }

    calcular(){
        const valorAnterior = parseFloat(this.valoranterior);
        const valorActual = parseFloat(this.valoractual);
        if(isNaN(valorAnterior) || isNaN(valorActual)) return
        this.valoractual = this.calculos[this.tipoOperacion](valorAnterior,valorActual);
      
    }

    porcentaje(){
        this.displayactual.textContent = (this.valoractual / 100);
        this.valoractual /= 100;
    }

    pi(){
        this.displayactual.textContent = '3.14159265359';
        this.valoractual = '3.14159265359';
    }

   
}