import React from 'react';
import './style.css';
import Tags from "./tags";
import MyDatePicker from './datePicker.js';
import {Link} from 'react-router-dom';

function showProdus(nevoie) {
    document.getElementById('durata').style.display = "none";
    document.getElementById('cantitate').style.display = "inline-block";
    nevoie="produsului";
}

function showServiciu(nevoie) {
    document.getElementById('cantitate').style.display = "none";
    document.getElementById('durata').style.display = "inline-block";
    nevoie="serviciului";
}
function currentDate(){
    return (new Date()).getDate()+'-'+((new Date()).getMonth()+1)+'-'+(new Date()).getFullYear();
}
function datePicker(){

}
function AlteServicii() { 
    let nevoie;
    let date_value_current=currentDate();
    React.useEffect(()=>{//spunem ca aceste adaugari sa se faca dupa ce s-a randat elementul returnat cred
    document.getElementById('Produs').addEventListener('onClick',showProdus);
    document.getElementById('Serviciu').addEventListener('onClick',showServiciu);
    document.getElementById('cantitate').style.display = "none";
    document.getElementById('durata').style.display = "none";
    //alert(String((new Date).getDate()).padStart(2,'0')+'-'+String((new Date).getMonth()+1).padStart(2,'0')+'-'+String((new Date).getFullYear()));
    //document.getElementById('data_pentru_cerere').setAttribute("min",currentDate());
    //document.getElementById('data_pentru_cerere').setAttribute("value",currentDate());
    
    },[]);
    
    return (
        <div class="wrapper" id="test">
            <div class="titlu_sectiune">
                <span>Alte servicii</span>
            </div>
            <div class="wrapper_form">
                <form>
                    <input type="radio" id="Produs" onClick={showProdus} name="tip_nevoie" value="Produs" />
                    <label for="Produs">Produs</label><br />
                    <input type="radio" id="Serviciu" onClick={showServiciu} name="tip_nevoie" value="Serviciu" />
                    <label for="Serviciu">Serviciu</label><br />
                    <br />
                    <label for="textbox">Descriere nevoie</label><br />
                    <Tags/>
                    <textarea id="descriere_text_box" name="textbox" />
                    <br/>
                <div id="cantitate">
                    <label for="cantitate_produs">Cantitate produs solitat</label>
                    <input type="text" id="cantitate_produs" name="cantitate_produs"/>
                </div>
                <div id="durata">
                    <label for="zile">Numar zile pentru serviciu</label>
                    <input type="number" name="zile"  value="0"/><br/>
                    <label for="zile">Numar ore pentru serviciu</label>
                    <input type="number" name="ore"  value="0"/><br/>
                    <label for="zile">Numar minute pentru serviciu</label>
                    <input type="number" name="minute"  value="0"/><br/>
                    <label for="zile">Numar secunde pentru serviciu</label>
                    <input type="number" name="secunde"  value="0"/><br/>
                </div>
                <br/>
                {/*<label for="data_dorita">Data doriri finalizarii cererii {nevoie}</label>*/}
                <span>Data doririi finalizării cererii</span><br/>
                <MyDatePicker/>
                {/*<input type="date" id="data_pentru_cerere" value={date_value_current} name="data_dorita"></input>*/}
                <Link type="submit" to "/loadingscreen">Trimite</Link>
                </form>
            </div>
        </div>
    );
}
export default AlteServicii;