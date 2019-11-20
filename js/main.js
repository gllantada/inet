
var senadores=data.results[0].members;
console.log(senadores);

function getParty(array,party){
var democratas=array.filter((senador)=>{
   if (senador.party==party){
      return senador;
   }
})
return democratas;
}
var democratas=getParty(senadores,"D");
console.log(democratas)

function getMayor(array,campo){
   var resul=array[0];
   for(i=1;i<array.length;i++){
      if(resul[campo]<array[i][campo]){
         resul=array[i];

      }
   }
   return resul;
}
function getAlgunosPorCampo(array,campo,cant){
var arrayAuxiliar=array;
var resul=[];
var indexResul=0;
var otroaux;
for(var i=0;i<cant;i++){
otroaux=getMayor(arrayAuxiliar);

resul[indexResul]=otroaux;
arrayAuxiliar=arrayAuxiliar.filter((elemento)=>{
   if(elemento!=otroaux){
      return elemento;
   }
})
indexResul++;
// console.log(otroaux)

}
// console.log(resul)
return resul;
}
var top10democratas=getAlgunosPorCampo(senadores,"votes_with_party_pct",20);
// getAlgunosPorCampo(democratas,"votes_with_party_pct",10);
console.log(top10democratas)
// console.log(getMayor(democratas))
// console.log(getMayor(democratas))
// console.log(getMayor(democratas))
// console.log(getMayor(democratas))
// console.log(getMayor(democratas))
// console.log(getMayor(democratas))









// console.log("pepito");
// var minombre=muchosnombres[0];
var muchosnombres=["gonzalo","pedro","julian","alfonzo","pepito","pedrito"];

function saludar(array){
   console.log("hola mundo");
   var i=0
while(i<array.length){
   console.log(array[i]);
   i++;
}
}

saludar(muchosnombres);



















//     var senadores=data.results[0].members;
//    //  console.log(senadores)
//    //  console.log(senadores[0]);
//    //  var paracargaralhtml=senadores.map(function(pepito){
//    //     return "<tr><td>"+pepito.first_name+"-> "+pepito.last_name+"</td></tr>";
//    //  })
//    //  console.log(paracargaralhtml);
//    //  var mitabla=document.getElementById("mitabla");
//    //  console.log(mitabla);
//    //  mitabla.innerHTML=paracargaralhtml.join("");
//    function traerPartido(partyinterna){
//    var democratas=senadores.filter(function(senador){
//       if(senador.party==partyinterna){
//          return senador;
//       }
//    })
// return democratas
// }
//    var democratas=traerPartido("D");
//    var independientes=traerPartido("I");
//    var republicanos= traerPartido("R")
//    // console.log(democratas,independientes,republicanos)
   
//    function getmasgrande(array){
//       var max=array[0].votes_with_party_pct;
//       var possmax=0;
//       var resul=[];
//       var i=0;
//       array.forEach((element,index) => {
//          if(element.votes_with_party_pct>max){
//             resul[i]=element.votes_with_party_pct;
//             possmax=index;
//          }

//       });
//       // console.log(resul);
// return array[possmax];
//    }
//    function getTopFive(array){
//       var fist=[];
//       for(var i=0;i<5;i++){
//           fist[i]=getmasgrande(array);
//          var reduce=array.filter(element=>{
//              if(element!=fist[i]){
//                   return element
//                 }
//                })
//           fist[i]=getmasgrande(reduce);
//          //  console.log(reduce)
//           array=reduce;
//       }
      

//       return fist

//    }
//   console.log(getmasgrande(democratas))
//   console.log(getTopFive(democratas))
