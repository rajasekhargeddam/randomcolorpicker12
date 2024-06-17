function changcolor(){
    var hex_char = ["0","2","3","4","5","6","7","8","9","A","B","C","D","E"];

    var pic_Code = "";
    for (let i = 0; i < 6; i++) {
        const rand_index = Math.floor(Math.random() * hex_char.length);
        pic_Code += hex_char[rand_index]; 
    }
    document.getElementById("code").innerHTML = pic_Code;
    document.getElementsByTagName("body")[0].style.backgroundColor = "#"+pic_Code;
    console.log(pic_Code);
}