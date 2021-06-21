let preg;
let cond=0;

function solucionar(){
    x = document.getElementById("personaEscuche").value;
    k = document.getElementById("personaCreer").value;
  
        console.log("Datos correctos: " + x + " " + k);
        X = x - 1;
        K = k - 1;
        Y = X - K;
        resta = x - k; 
        p = Math.pow(0.8, k);
        p2 = Math.pow(0.2, resta);
        combinacion = (factorial(X)/(factorial(K) * factorial(Y)));
        preg = (combinacion * p *  p2).toFixed(10);
        console.log(preg);
    }

const factorial = (num) =>{
    let fac=1;
    for(i=1; i<=num; i++)
        fac = fac * i;
    return fac;
}


const formulario = document.getElementById("formsol");
formulario.addEventListener('submit', (event) => {
    cond=0;
    event.preventDefault();
    solucionar()
    if(cond===0){
        Swal.fire({
            icon: 'success',
            title: 'Resultados',
            html:  `<p>La probabilidad de que la persona ${x} que escucho el rumor sea la persona ${k} en creerlo es de: ${preg}</p>`
        })
    }    
});

