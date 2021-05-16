import React,{useState,useEffect} from 'react';
import "./style.css";
// const formik = useFormik({
    //     initialValues: {
    //         tip_nevoie: 'Produs',
    //         tags: [],
    //         textbox: '',
    //         quantity: 0,
    //         bifatIzolare: false,
    //     },
    //     onSubmit: values => {
    //         values.tags = props.tags.map((tag) => [tag.id, tag.cantitate] );
    //         alert(JSON.stringify(values, null, null));
    //         fetch(`https://hooks.zapier.com/hooks/catch/10117216/byp97u8`, {
    //             method: 'POST',
    //             body: JSON.stringify(values, null, null),
    //         });
    //         console.log(values);
    //     }
    // });
function CantitateInput(props) {
    const [cantitate, setCantitate] = useState(0);

    const {giveQuantity, tag} = props;
    
    const seteazaCantitate=(event)=>{
        setCantitate((cantitate) => (event.target.value))
    };

    return (
        <div className="Cantitate_produs" id="cantitateprodus">
            <div className="Cantitate_produs_1">
                <label for="quantity">Cantitatea produsului {tag.id}:</label>
                <br />
                <input onChange={seteazaCantitate} required type="number" id="quantity" name="quantity" min="1" max="100" />
            </div>
        </div>

    );
}

export default CantitateInput;