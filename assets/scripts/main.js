// main.js
//Input field editable
document.getElementById("volume-number").addEventListener("input", change_number);
function change_number(){
    let input_number = document.getElementById("volume-number").value;
    document.getElementById("volume-slider").value = input_number;
    document.getElementById("horn-sound").volume = input_number/100;
}
//Slide updates
document.getElementById("volume-slider").addEventListener("input", change_slider);
function change_slider(){
    let slider_num = document.getElementById("volume-slider").value;
    document.getElementById("horn-sound").volume = slider_num/100;
    document.getElementById("volume-number").value = slider_num;
    document.getElementById("honk-btn").disabled = false;

    if(slider_num >= 67 && slider_num <= 100 ){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    }else if(slider_num >= 34 && slider_num <= 66 ){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    }else if(slider_num >= 1 && slider_num <= 33 ){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    }else{
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        
    }
    if(slider_num == 0){
        document.getElementById("honk-btn").disabled = true;
    }
}
//Choose Horn
var air_sound = document.getElementById("horn-sound");
var car_sound = new Audio('./assets/media/audio/car-horn.mp3');
var party_sound = new Audio('./assets/media/audio/party-horn.mp3');

document.getElementById("honk-btn").addEventListener("click", horn);

function horn(){
    if(document.getElementById("radio-air-horn").checked){
        air_sound.play();
    }else if (document.getElementById("radio-car-horn").checked){
        car_sound.play();
    }else{
        party_sound.play();
    }
    event.preventDefault();
}
