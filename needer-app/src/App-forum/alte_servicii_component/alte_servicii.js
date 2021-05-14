import React from 'react';
import './style.css';
import Tags from "./tags";
import MyDatePicker from './datePicker.js';
import { Link } from 'react-router-dom';

class AlteServicii extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tip_serviciu: '',
            tags: [],
            textarea: '',
            cantitate: 0,
        };
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
        this.handleChangeCantitate = this.handleSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.callBackDate = this.callBackDate.bind(this);
        this.showCantitate=this.showCantitate.bind(this);
        this.hideCantitate=this.hideCantitate.bind(this);
    }

    handleTags = (dataTags) => {
        this.setState({ tags : dataTags});
        console.log(this.state);
    }

    handleInputChange(event) {
        var target = event.target;
        if (target.type === 'radio') {
            this.setState({ tip_serviciu: event.target.value });
        }
        if (target.type === 'number') {
            this.setState({ cantitate: event.target.value });
        }
    }

    handleChangeCantitate(event) {
        this.setState({ cantitate: event.target.value });
    }

    handleChangeTextArea(event) {
        this.setState({ textarea: event.target.value });
    }

    handleChangeType(event) {
        this.setState({ tip_serviciu: event.target.value });
    }
  
    hideCantitate() {
        document.getElementById("cantitateprodus").style.display = "none";
        this.setState({
            tip_serviciu: 'Serviciu'
        });
    }
    showCantitate() {
        document.getElementById("cantitateprodus").style.display = "inline-block";
        this.setState({
            tip_serviciu: 'Produs'
    });
    }
    componentDidMount() {
        document.getElementById("selectServiciu").addEventListener('onClick', this.hideCantitate);
        document.getElementById("selectProdus").addEventListener('onClick',this.showCantitate);
        document.getElementById('cantitateprodus').style.display = "none";
    }

  
    handleSubmit(event) {
        console.log(this.state.tags);
        event.preventDefault();
        fetch(`https://hooks.zapier.com/hooks/catch/10117216/byqhx9d/silent/`, {
            method: 'POST',
            //body: JSON.stringify({ email, comment }),
        });
    }
    callBackDate(data_copil){
        this.setState({
            data_finalizare: data_copil
        });
        console.log(this.state);
    }
    render() {
        return (
            <div class="wrapper" id="test">
                <div class="wrapper_form">
                    <form onSubmit={this.handleSubmit}>
                        {/*https://hooks.zapier.com/hooks/catch/10117216/byqhx9d/silent/*/}
                        <div class="DescriereNevoie"><label>Descriere nevoie</label> </div> <br />

                        <label htmlFor="tip_nevoie">Alegeți tipul de nevoie</label><br />
                        <input  type="radio" id="selectServiciu" onClick={this.hideCantitate} name="tip_nevoie" value="Serviciu" required /> Serviciu <br />
                        <input  type="radio" id="selectProdus" onClick={this.showCantitate} name="tip_nevoie" value="Produs" checked required /> Produs
                            <br />
                        <Tags parentCallback={this.handleTags}/>
                        <textarea id="descriere_text_box" name="textbox" onChange={this.handleChangeTextArea} />
                        <br />
                        {/*<label for="data_dorita">Data doriri finalizarii cererii {nevoie}</label>*/}
                        <div class="DescriereData"><span class="DataFinalizare">Data doririi finalizării cererii</span></div>
                        <br />
                        {/*<MyDatePicker giveData={this.callBackDate />*/}
                        <div class="Cantitate_produs" id="cantitateprodus">
                            <div class="Cantitate_produs_1">
                                <label for="quantity">Cantitate (intre 1 si 100 de kilograme):</label>
                            </div>
                            <input type="number" id="quantity" name="quantity" min="1" max="100" />
                            <br />
                        </div>
                        <div class="alignRight">
                            <Link to='/loading'>
                                <input class="butonSubmit" type="submit"></input>
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        );
    };
}


export default AlteServicii;