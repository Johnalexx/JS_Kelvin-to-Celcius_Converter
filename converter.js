function changeBg(){
    var randomBg = Math.floor(Math.random() * 5) + 0;
    var bigSize = ["url('images/temp/1.jpeg')",
                   "url('images/temp/2.jpeg')",
                   "url('images/temp/3.jpeg')",
                   "url('images/temp/4.jpeg')"];
    document.getElementById("randomBg").style.backgroundImage=bigSize[randomBg];
  }

function convert(){

    var kelv = document.getElementById('convert_kelv').value;
    var celcius = 274.15;

    if (kelv == ""){
        alert ("Input a value")
    }else{
        var converted = Number(kelv) - Number(celcius).toFixed(3);
        //Prints the result
        document.getElementById('result').innerHTML = kelv + " degree kelvin to degree celcius is " + converted + " C ";
   }
}