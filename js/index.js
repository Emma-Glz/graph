var lineDiv = document.getElementById('line-chart');
var vgg = document.getElementById('formvgg')
var vdd = document.getElementById('formvdd')
var rd = document.getElementById('formrd')
var idss = document.getElementById('formidss')
var vp = document.getElementById('formvp')
var button = document.getElementById('button')

button.addEventListener('click', dibujoGrafica);

function dibujoGrafica(){
    var xVoltaje = parseInt(vdd.value);
    console.log(xVoltaje);
    var yCorriente =parseFloat(vdd.value)/parseFloat(rd.value);
    console.log(yCorriente);
    var numero1PruebaDefinida = parseFloat(idss.value)*Math.pow((1-(-2/-8)),2);
    console.log(numero1PruebaDefinida)
    var vds = xVoltaje - (parseFloat(rd.value)*parseFloat(numero1PruebaDefinida));
    console.log(vds)
    //var xPunto = parseFloat(vdd.value) - id
    
    drawGrafiph(16,8e-3,4.75,5.625e-3)
}

function drawGrafiph(vdd,idmax,vds,id){
    var traceA = {
      x: [vdd,0],//20 = voltaje
      y: [0,idmax],//0.00065 corriente
      type: 'scatter'
    };
    var traceB = {
      x: [vds],
      y: [id],
      type: 'scatter',
      marker: {
        symbol: 'star',
        size: 12
      }
    };    
  var data = [traceA,traceB];
  var layout = {
    title:'Recta de carga y Punto de operacion.',
    xaxis:{
      title: 'Votaje(V)',  
    },
    yaxis:{
      title: 'Corriente(A)',
    }
  };
Plotly.plot( lineDiv, data, layout);
}

 