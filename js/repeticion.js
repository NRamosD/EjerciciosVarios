
//GASOLINERA
var totalGasolina, totalVe, mayorCantGasolina, dineroTotal //vector de #auto con su consumo
var autoYconsumo = []
document.getElementById("cantidadGasolina").disabled = true
document.getElementById("nombreAuto").disabled = true
document.getElementById("btnNueva").disabled = true
document.getElementById("btnDesp").disabled = true
var img = document.getElementById("imgEjercicio")
function inicioTurno(){
    totalGasolina = document.getElementById("litros").value
    if(parseInt(totalGasolina)>0){
        document.getElementById("litros").disabled = true
        document.getElementById("btnInicio").disabled = true
        document.getElementById("cantidadGasolina").disabled = false
        document.getElementById("nombreAuto").disabled = false
        document.getElementById("btnNueva").disabled = false
        document.getElementById("btnDesp").disabled = false
        totalVe = 0
        img.src = "/img/surtiendogasolina.gif"
        mayorCantGasolina = 0
        dineroTotal = 0
    }else{
        alert("Ingrese una cantidad de gasolina válida.") 
    }
    
}

function despachar(){
    var consumo = document.getElementById("cantidadGasolina").value
    var nombre = document.getElementById("nombreAuto").value
    if(parseInt(consumo)>0){
        totalVe++
        dineroTotal += (consumo * 1.25)
        var aux = totalGasolina
        totalGasolina -= consumo
        if(totalGasolina>=0){
            if(mayorCantGasolina<parseFloat(consumo)){
                mayorCantGasolina = consumo
                autoYconsumo.unshift([nombre, consumo])
            }else{
                autoYconsumo.push([nombre,consumo])
            }
            console.log(autoYconsumo)
            if(consumo!="" && nombre!=""){
                let cont = 0
                alert("Surtiendo gasolina...")
                document.getElementById("respuesta").innerHTML = "Total vehiculos "+ totalVe+"<br>Dinero recaudado: "+dineroTotal+"<br>Mayor cantidad despachada: "+autoYconsumo[0][0]+" con "+autoYconsumo[0][1]+" litros"
            }else{
                alert("Llene todos los campos para continuar")
            }
        }else{
            if(totalGasolina==0){
                alert("No hay más gasolina en el depósito 😕")
            }else{
                totalGasolina = aux
                alert("Solo quedan "+totalGasolina+" litros en el depósito. Intente con una menor cantidad.")
            }
            
        }
    }else{
        alert("Ingrese una cantidad de gasolina válida.")
    }
    
}
function nuevoTurno(){
    totalVe = 0 
    mayorCantGasolina = 0 
    dineroTotal = 0 
    autoYconsumo = []
    document.getElementById("litros").disabled = false
    document.getElementById("btnInicio").disabled = false
    document.getElementById("cantidadGasolina").disabled = true
    document.getElementById("nombreAuto").disabled = true
    document.getElementById("btnNueva").disabled = true
    document.getElementById("btnDesp").disabled = true
    img.src = "/img/surtiendogasolinastatic.PNG"
}


//binario
function binario(){
    var d = document.getElementById("num").value
    if(d>=0){
        document.getElementById("respuesta").innerHTML = parseInt(d).toString(2)
    }else{
        alert("Ingrese una cantidad válida")
    }
}
//narcicistas
function narcicistas(){
    var inicio = document.getElementById("num1").value
    var fin = document.getElementById("num2").value
    var cantNarci = 0
    var  arrayCubos = []
    var i,x,y,z;
	for(i= parseInt(inicio);i< parseInt(fin);i++)
	{
		x=i%10;
		y=(i/10)%10;
		z=(i/100)%10;
		
		if(i==((parseInt(x)*parseInt(x)*parseInt(x))+(parseInt(y)*parseInt(y)*parseInt(y))+(parseInt(z)*parseInt(z)*parseInt(z)))){
            arrayCubos.push(i)
            cantNarci++
        }
	}
    if(cantNarci>0){
        document.getElementById("respuesta").innerHTML = arrayCubos.join('-');
    }else{
        alert("No se encontró ningún número narcisista en el interválo indicado")
        document.getElementById("respuesta").innerHTML = "..."
    }
    
}
//Permutacion
function permutacion(){
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value
    var n3 = document.getElementById("n3").value
    var n4 = document.getElementById("n4").value
    var list = [n1,n2,n3,n4]
    let cadena = ""
    if(!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4)){
        if(parseInt(n1)<=9 && parseInt(n1)>=0 && parseInt(n2)<=9 && parseInt(n2)>=0 && parseInt(n3)<=9 && parseInt(n3)>=0 && parseInt(n4)<=9 && parseInt(n4)>=0){
            if(n1!=n2 && n2!=n3 && n3!=n4){
                for (let i = 0; i<=3; i++){
                    for (let j = 0; j<=3; j++){
                        cadena += (list[i]+list[j]+" - ")
                    }
                }
                document.getElementById('respuesta').innerHTML=cadena
            }else{
                alert("Deben ser números distintos")
            }
            
        }else{
            alert("Los númros deben tener un dígito")
        }
    }else{
        alert("Llene todos los campos para continuar")
    }
}
/*
JAJA TE PASASTE...
if(n1!=""&&n2!=""&&n3!=""&&n4!=""){        
        var list = [n1,n2,n3,n4]
        var ret = []
        permutacion2(list,ret)
    }else{
        alert("Ingrese valores")
    }
function permutacion2(list,ret){
    
    var d = document.getElementById('respuesta');
 
    if (list.length == 0) {
        var row = document.createTextNode(ret.join('') + '-\n');
        d.appendChild(row);
        return;
    }

    for (var i = 0; i < list.length; i++) {
        var x = list.splice(i, 1);
        ret.push(x);
        permutacion2(list, ret);
        ret.pop();
        list.splice(i, 0, x);
    }
}*/