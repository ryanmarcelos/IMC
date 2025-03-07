const caucular = document.createElement('calcular')
function imc(){
    const nome = document.getElementsById('nome').value;
    const altura = document.getElementsById('altura').value;
    const peso = document.getElementsById('peso').value;
    const resultado = document.getElementsById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso/(altura*altura)).toFixed(1); 
    
        let classificacao = '';
        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso';
            }
            else if(valorIMC < 25){
                classificacao = 'peso normal';
            }else if(valorIMC < 30){
                classificacao = 'levemente acima do peso';
            }else if(valorIMC < 35){
                classificacao = 'com obesidade grau 1';
            }else if(valorIMC < 40){
                classificacao = 'com obesidade grau 2';
            }else{
                classificacao = 'com obesidade grau 3. Cuidado!!';
            }
            resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
            }
             else{
              resultado.textContent = 'Preencha todos os campos';
             }
}
calcular.addEventListener('click', imc);