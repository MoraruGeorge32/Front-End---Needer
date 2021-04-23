import React from 'react';
import './style.css';
import Tags from "./tags";
import MyDatePicker from './datePicker.js';


function showProdus(nevoie) {
    document.getElementById('durata').style.display = "none";
    document.getElementById('cantitate').style.display = "inline-block";
    nevoie = "produsului";
}

function showServiciu(nevoie) {
    document.getElementById('cantitate').style.display = "none";
    document.getElementById('durata').style.display = "inline-block";
    nevoie = "serviciului";
}
function currentDate() {
    return (new Date).getDate() + '-' + ((new Date).getMonth() + 1) + '-' + (new Date).getFullYear();
}
function datePicker() {

}
function AlteServicii() {
    let nevoie;
    let date_value_current = currentDate();
    //alert(String((new Date).getDate()).padStart(2,'0')+'-'+String((new Date).getMonth()+1).padStart(2,'0')+'-'+String((new Date).getFullYear()));
    //document.getElementById('data_pentru_cerere').setAttribute("min",currentDate());
    //document.getElementById('data_pentru_cerere').setAttribute("value",currentDate());


    return (
            <div class="wrapper" id="test">
                <div class="titlu_sectiune">
                    <span>Alte servicii</span>
                </div>
                <div class="wrapper_form">
                    <form>
                        <div class="DescriereNevoie"><label for="textbox">Descriere nevoie</label> </div> <br />
                        <Tags />
                        <textarea id="descriere_text_box" name="textbox" />
                        <br />
                        <br />
                        {/*<label for="data_dorita">Data doriri finalizarii cererii {nevoie}</label>*/}
                        <div class="DescriereData"><span class="DataFinalizare">Data doririi finalizării cererii</span></div><br />
                        <MyDatePicker />
                        {/*<input type="date" id="data_pentru_cerere" value={date_value_current} name="data_dorita"></input>*/}
                        <div class="alignRight"><input class="butonSubmit" type="submit"></input></div>
                    </form>
                </div>
            </div>
        
    );
}
export default AlteServicii;