import React, { useState, useEffect } from 'react';
import { unmountComponentAtNode, findDOMNode, render } from 'react-dom';
import './style.css';
import Tags from "./tags";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import CantitateInput from "./cantitateInput";

// function hideCantitate() {
//     document.getElementById("cantitateprodus").style.display = "none";
// }

// function showCantitate() {
//     document.getElementById("cantitateprodus").style.display = "inline-block";
// }



function AlteServicii() {

    const [tags, setTags] = useState([]);
    var [cantitate, setCantitate] = useState([]);
    let count = 0;
    const formik = useFormik({
        initialValues: {
            tip_nevoie: '',
            tags: [],
            textbox: '',
        },
        onSubmit: values => {

            let tagValues = tags;
            tagValues.map((tag, index) => {
                tag.name = tag.text;
                delete tag["id"];
                delete tag["text"];
                return tag;
            })
            alert(JSON.stringify(tagValues));
            if (formik.values.tip_nevoie === "Produs")
                tagValues.map((tag, index) => tag["quantity"] = cantitate[index])
            else
                tagValues.map((tag) => tag["quantity"] = -1)
            values.tags = tagValues;
            alert(JSON.stringify(values));
            fetch(`https://hooks.zapier.com/hooks/catch/10117216/byp97u8`, {
                method: 'POST',
                body: JSON.stringify(values),
            });
            console.log(JSON.stringify(values));
        },
    });

    const formikNevoie = () => {
        let selectedRadio = "";
        if (document.getElementById("selectServiciu").checked)
        { 
             selectedRadio = "Serviciu";
        }
        else 
        {
            selectedRadio = "Produs";
        }
        if (formik.values.tip_nevoie !== selectedRadio)
            setTags([]);
        formik.values.tip_nevoie = selectedRadio;
    }

    const seteazaTag = (tag) => {
        setTags(tag)
    }   

    return (<div className="wrapper" id="test">
        <div className="wrapper_form">
            <form onSubmit={formik.handleSubmit}>
                <div className="DescriereNevoie"><label>Descriere nevoie</label> </div> <br />

                <label htmlFor="tip_nevoie">Alegeți tipul de nevoie</label><br />
                <input defaultChecked onChange={formikNevoie} type="radio" id="selectServiciu" name="tip_nevoie" value="Serviciu" required /> Serviciu <br />
                <input onChange={formikNevoie} type="radio" id="selectProdus" name="tip_nevoie" value="Produs" required /> Produs
                <br />
                <div id="listaTags">
                    <Tags giveTags={seteazaTag} tags={tags} check={formik.values.tip_nevoie} />
                </div>
                <textarea id="descriere_text_box" name="textbox" onChange={formik.handleChange} />
                <br />
                <div className="DescriereData"><span className="DataFinalizare">Data doririi finalizării cererii</span></div>
                <br />
                {
                    (formik.values.tip_nevoie === "Produs") ?
                        tags.map((tag) =>
                            <CantitateInput quantity={cantitate} giveQuantity={setCantitate} tag={tag} keys={++count} />) : undefined

                }

                <div className="alignRight">
                    <Link to='/loading'>
                        <input className="butonSubmit" onClick={formik.handleSubmit} type="submit"></input>
                    </Link>
                </div>

            </form>
        </div>
    </div>
    );
}

export default AlteServicii;



/*
className ClasaAlteServicii extends React.Component {
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
        this.showCantitate = this.showCantitate.bind(this);
        this.hideCantitate = this.hideCantitate.bind(this);
    }

    handleTags = (dataTags) => {
        this.setState({ tags: dataTags });
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
        document.getElementById("selectProdus").addEventListener('onClick', this.showCantitate);
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
    callBackDate(data_copil) {
        this.setState({
            data_finalizare: data_copil
        });
        console.log(this.state);
    }
    render() {
        return (
            <div className="wrapper" id="test">
                <div className="wrapper_form">
                    <form onSubmit={this.handleSubmit}>
                        
                        <div className="DescriereNevoie"><label>Descriere nevoie</label> </div> <br />

                        <label htmlFor="tip_nevoie">Alegeți tipul de nevoie</label><br />
                        <input type="radio" id="selectServiciu" onClick={this.hideCantitate} name="tip_nevoie" value="Serviciu" required /> Serviciu <br />
                        <input type="radio" id="selectProdus" onClick={this.showCantitate} name="tip_nevoie" value="Produs" checked required /> Produs
                            <br />
                        <Tags parentCallback={this.handleTags} />
                        <textarea id="descriere_text_box" name="textbox" onChange={this.handleChangeTextArea} />
                        <br />
                        
                        <div className="DescriereData"><span className="DataFinalizare">Data doririi finalizării cererii</span></div>
                        <br />
                        
                        <div className="Cantitate_produs" id="cantitateprodus">
                            <div className="Cantitate_produs_1">
                                <label for="quantity">Cantitate (intre 1 si 100 de kilograme):</label>
                            </div>
                            <input type="number" id="quantity" name="quantity" min="1" max="100" />
                            <br />
                        </div>
                        <div className="alignRight">
                            <Link to='/loading'>
                                <input className="butonSubmit" type="submit"></input>
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        );
    };
}
*/
//de avut in calcul functie asyncrona cand vrem raspuns de la catalin
function User(props) {
    const [user, setUser] = useState(null);

    async function fetchUserData(id) {
        const response = await fetch("/" + id);
        setUser(await response.json());
    }
    /*
      useEffect(() => {
        fetchUserData(props.id);
      }, [props.id]);*/

    if (!user) {
        return "loading...";
    }

    return (
        <details>
            <summary>{user.name}</summary>
            <strong>{user.age}</strong> years old
            <br />
        lives in {user.address}
        </details>
    );
}