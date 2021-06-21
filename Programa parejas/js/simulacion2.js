function showGraphics() {
  var a = document.getElementById("personaEscuche").value;
var b = document.getElementById("personaCreer").value;
   var showGraph = document.getElementById('myfirstchart');
   dataX=parseInt(a,10);
   dataY=parseInt(b,10);
  console.log(typeof(dataX));
   console.log("x: ", document.getElementById("personaEscuche").value);
   console.log("x es: ", x)
    if (showGraph.style.display === 'none') {
        showGraph.style.display = 'block';
    } else {
      document.getElementById('myfirstchart').innerHTML = '';
        new Morris.Bar({
          
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.  

    data: [
      { year: dataY-3, value: solucionar2(dataX,dataY-3) },
      { year: dataY-2, value:  solucionar2(dataX,dataY-2) },
      { year: dataY-1, value: solucionar2(dataX,dataY-1)},
      { year: dataY, value: solucionar2(dataX,dataY)},
      { year: dataX-1, value: solucionar2(dataX,dataX-1)}
    ],
    // The name of the data record attribute that contains dataX-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['probabilidad']
  });
    }
}
function solucionar2(x,k){
      console.log("Datos correctos: " + x + " " + k);
      X = x - 1;
      K = k - 1;
      Y = X - K;
      resta = x - k; 
      p = Math.pow(0.8, k);
      p2 = Math.pow(0.2, resta);
      combinacion = (factorial2(X)/(factorial2(K) * factorial2(Y)));
      preg = (combinacion * p *  p2).toFixed(8);
      console.log(preg);
      return preg;
  }
  
const factorial2 = (num) =>{
  let fac=1;
  for(i=1; i<=num; i++)
      fac = fac * i;
  return fac;
}


