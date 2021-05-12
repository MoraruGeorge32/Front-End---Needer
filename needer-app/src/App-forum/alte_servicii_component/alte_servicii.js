import React from 'react';
import './style.css';
import Tags from "./tags";
import MyDatePicker from './datePicker.js';
import { Link } from 'react-router-dom';

function showCantitate() {
    document.getElementById("cantitateprodus").style.display = "block";
}
function hideCantitate() {
    document.getElementById("cantitateprodus").style.display = "none";
}


function AlteServicii() {
    React.useEffect(() => {
        document.getElementById("selectServiciu").addEventListener('onClick', hideCantitate());
        document.getElementById("selectProdus").addEventListener('onClick', showCantitate());
        document.getElementById('cantitateprodus').style.display = "none";
    }, []);
    return (
        <div class="wrapper" id="test">
            <div class="wrapper_form">
                <form method="POST">
                    <div class="DescriereNevoie"><label>Descriere nevoie</label> </div> <br />

                    <label for="tip_nevoie">Alegeți tipul de nevoie</label><br />
                    <input type="radio" id="selectServiciu" onClick={hideCantitate} name="tip_nevoie" value="Serviciu" /> Serviciu <br />
                    <input type="radio" id="selectProdus" onClick={showCantitate} name="tip_nevoie" value="Produs" /> Produs
                    <br />
                    <Tags />
                    <textarea id="descriere_text_box" name="textbox" />
                    <br />
                    {/*<label for="data_dorita">Data doriri finalizarii cererii {nevoie}</label>*/}
                    <div class="DescriereData"><span class="DataFinalizare">Data doririi finalizării cererii</span></div>
                    <br />
                    <div class="Cantitate_produs" id="cantitateprodus">
                        <label for="quantity">Cantitate (intre 1 si 100 de kilograme):</label>
                        <input type="number" id="quantity" name="quantity" min="1" max="100"/><br />
                    </div>
                        <MyDatePicker />
                        {/*<input type="date" id="data_pentru_cerere" value={date_value_current} name="data_dorita"></input>*/}
                        <Link to='/loading'>
                            <div class="alignRight">
                                <input class="butonSubmit" type="submit">
                                </input></div>
                        </Link>
                </form>
            </div>
            </div>

    );
}
export default AlteServicii;