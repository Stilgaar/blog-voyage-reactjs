import { useState } from 'react';
import './form.css';



function Formulaire(props) {



    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [age, setAge] = useState("");

    const leClick = () => {
        console.log(nom)
        console.log(prenom)
        console.log(age)
    }

    const onTextNom = (e) => {
        setNom(e.target.value)
    }
    const onTextPrenom = (e) => {
        setPrenom(e.target.value)
    }
    const onTextAge = (e) => {
        setAge(e.target.value)
    }


    return (

        <div className="formulaire">

            <h4>{props.titre4}</h4>
           

            <input placeholder="nom" type="text" onChange={onTextNom} />
            <input placeholder="prenom" type="text" onChange={onTextPrenom} />
            <input placeholder="age" type="number" onChange={onTextAge} />
            <button onClick={leClick} >Go !</button>

        </div>

    );

}

export default Formulaire;