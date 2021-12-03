var object = new XMLHttpRequest();

object.open('GET', 'http://api.countrylayer.com/v2/lang/en?access_key=275509dcaede36f110349896cd8ac3e7');

object.send();

object.onload = function(){
    var data = JSON.parse(this.response);
    //console.log(data)
    for (i=0;i<data.length;i++){
        console.log(data[i].name)
    }
   
}