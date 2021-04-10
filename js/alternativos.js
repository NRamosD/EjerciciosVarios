
function monto(){
    var cantProductos = document.getElementById("uni").value
    cantProductos = parseInt(cantProductos)
    if(cantProductos>0){            
        var docenas, total, descuento, valor, uniObsequio, a
        docenas = parseInt(cantProductos/12)
        total = cantProductos * 9.5
        if(cantProductos>36){
            descuento = total * 0.15
            a = cantProductos-36
            a = parseInt(a/12)
            uniObsequio = a
            valor = (total-descuento)
        }else{
            descuento = total * 0.10
            uniObsequio = 0
            valor = (total-descuento)
        }
        document.getElementById("respuesta").innerHTML = "Cantidad de productos:  "+cantProductos+"<br>Descuento: $"+descuento.toFixed(2)+"<br>Monto a pagar: $"+valor.toFixed(2)+"<br>Unidades de obsequio: "+uniObsequio
    }else{
        alert("Ingrese una cantidad válida.")
    }
}
/*Calcule la hora al siguiente segundo */
function hora(){
    var today = new Date();
    var hora = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    document.getElementById("respuesta").innerHTML = hora
}

function precioAlquiler(){
    var kmRecorridos = document.getElementById("km").value
    kmRecorridos = parseFloat(kmRecorridos)
    var montoPagar = 300000, iva, kmAdicionales
    if(kmRecorridos>0){    
        if(kmRecorridos<=300){
            
            iva = 300000 * 0.2
        }
        if(kmRecorridos>300 && kmRecorridos<=1000){
            kmAdicionales = kmRecorridos-300
            montoPagar += (kmAdicionales*15000)
            iva = montoPagar * 0.2
        }
        if(kmRecorridos>1000){
            kmAdicionales = kmRecorridos-300
            montoPagar += (kmAdicionales*10000)
            iva = montoPagar * 0.2
        }
        document.getElementById("respuesta").innerHTML = "Cuentas totales:"+"<br>Impuesto(IVA): $  "+iva.toFixed(2)+ "<br>Monto total a pagar: $"+montoPagar
    }else{
        alert("Ingrese kilómtros válidos")
    }
    
}
/*Calcule la edad de una persona conociendo su fecha de nacimiento en día, mes y año*/
function edad(){
    var fecha1 = new Date(document.getElementById("ed").value);
    var fecha2 = new Date()
    var resta = fecha2.getTime() - fecha1.getTime()
    document.getElementById("respuesta").innerHTML = "Su edad actual es:<br>"+(Math.round(resta/ (1000*31536000)))+" años."
}