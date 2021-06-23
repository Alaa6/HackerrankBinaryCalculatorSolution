var btn0 = document.getElementById("btn0")
var btn1 = document.getElementById("btn1")
var btnClr = document.getElementById("btnClr")
var btnEql = document.getElementById("btnEql")
var btnSum = document.getElementById("btnSum")
var btnSub = document.getElementById("btnSub")
var btnMul = document.getElementById("btnMul")
var btnDiv = document.getElementById("btnDiv")


btn0.onclick = ()=> {
    res.innerHTML += btn0.innerHTML
}

btn1.onclick = ()=> {
    res.innerHTML += btn1.innerHTML
}
btnClr.onclick = ()=> {
    res.innerHTML = ""
}
btnEql.onclick = ()=> {
     var result =0
    var srchSign = /\+|\-|\/|\*/g
    var sign = res.innerHTML.toString().match(srchSign).toString()
    var arrOfNum = res.innerHTML.split(sign)
     console.log(arrOfNum)
    for(var i =0 ; i < arrOfNum.length ; i++) {
        var digit1   =  parseInt(arrOfNum[0] , 2);
        var digit2   =  parseInt(arrOfNum[1] , 2);
        var digitRes =  eval(`${digit1} ${sign} ${digit2}` );

      result = digitRes.toString(2); 
    }
    
    res.innerHTML = result
}

btnSum.onclick = ()=> {
    res.innerHTML += btnSum.innerHTML
}
btnSub.onclick = ()=> {
    res.innerHTML += btnSub.innerHTML
}
btnMul.onclick = ()=> {
    res.innerHTML += btnMul.innerHTML
}
btnDiv.onclick = ()=> {
    res.innerHTML += btnDiv.innerHTML
}

