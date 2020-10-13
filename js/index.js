var lineDiv = document.getElementById('line-chart');

drawGrafiph(16,8e-3,4.75,5.625e-3)

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
 