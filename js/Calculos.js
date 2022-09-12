class Calculos {
    sumar(num1, num2){
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    multiplicar(num1, num2){
        return num1 * num2;
    }

    dividir(num1, num2){
        return num1 / num2;
    }
    
    raiz(num1, num2){
        return Math.pow(num2, 1/num1);
    }

    pote(num1, num2){
        return Math.pow(num2, num1);
    }

    pote_n(num1, num2){
        return Math.pow(num1, num2);
    }

    fact(num1, num2){
        let factorial = 1;
        let a=0;
        for (a=num2; a >= 1; a--){
            factorial *= a;
        }
        return factorial;
    }
}