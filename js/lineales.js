function elevacionDelSol(){
    var a = document.getElementById("base").value
    var b = document.getElementById("altura").value
    if(parseInt(a)>0 && parseInt(b)>0){

        var c = parseFloat(b)/parseFloat(a)
        c = Math.atan(c)
        var gra, min, seg, residuo1, residuo2, residuo3
        gra = c*(180/Math.PI)
        residuo1 = (gra-parseInt(gra))
        if(residuo1!=0){
            min = residuo1*60
        }else{
            min = 0
        }
        residuo2 = (min-parseInt(min)) 
        if(residuo2!=0){
            seg = residuo2*60
        }else{
            seg = 0    
        }
        try {
            document.getElementById("respuesta").innerHTML = parseInt(gra)+"° "+parseInt(min)+"' "+parseInt(seg)+"''"
            //document.getElementById("respuesta").innerHTML = residuo1+"° "+residuo2+"' "+residuo3+"''"
        } catch (error) {
            console.log(error)
        }    
    }else{
        alert("No se permiten longitudes negativas.")
    }
}


function alturaMRUV(){
    var a = document.getElementById("tiempo").value
    if(a>=0){
        var res =  (0.5 * (Math.pow(a,2)) * 9.8)
        document.getElementById("respuesta").innerHTML =  res.toFixed(4)+" metros."
    }else{
        alert("No existen tiempos negativos.")
    }
    
}

function num5Cifras(){
    var n1 = document.getElementById("num1").value
    var n2 = document.getElementById("num2").value
    var n3 = document.getElementById("num3").value
    var n4 = document.getElementById("num4").value
    var n5 = document.getElementById("num5").value
    if(n1!="" && n2!="" &&n3!="" &&n4!="" &&n5!=""){
        if(!isNaN(n1)&& !isNaN(n2) && !isNaN(n3) && !isNaN(n4) && !isNaN(n5)){
            if( parseInt(n1)>=10000 && parseInt(n2)>=10000 &&parseInt(n3)>=10000 &&parseInt(n4)>=10000 &&parseInt(n5)>=10000){
                document.getElementById("respuesta").innerHTML = n1[0]+n2[1]+n3[2]+n4[3]+n5[4]
            }else{
                alert("Deben ser números de 5 cifras")
            }
            
        }else{
            alert("Ingrese valores numéricos")
        }
    }else{
        alert("Llene todos los campos para continuar")
    }
    
}
