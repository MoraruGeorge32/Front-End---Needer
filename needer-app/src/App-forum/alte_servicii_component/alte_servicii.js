import React from 'react';
import './style.css';
import Tags from "./tags";
import MyDatePicker from './datePicker.js';
import {Link} from 'react-router-dom';

function AlteServicii() {
    return (
            <div class="wrapper" id="test">
                <div class="wrapper_form">
                    <form>
                        <div class="DescriereNevoie"><label>Descriere nevoie</label> </div> <br />
                        <Tags />
                        <textarea id="descriere_text_box" name="textbox" />
                        <br />
                        <br />
                        {/*<label for="data_dorita">Data doriri finalizarii cererii {nevoie}</label>*/}
                        <div class="DescriereData"><span class="DataFinalizare">Data doririi finalizării cererii</span></div><br />
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