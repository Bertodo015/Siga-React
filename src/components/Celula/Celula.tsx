import "./Celula.css";

function Celula(props: {nomeClasse: string | null;  vezDoXis: boolean}) {
    let classe = 'celula';
    if (props.nomeClasse == 'xis') {
        classe += " xis";
    } else {
        if (props.nomeClasse == 'circulo') {
            classe += " circulo";
        } else {
            if (props.vezDoXis == true) {
                classe = classe + " hoverDoXis";
            } else {
                classe = classe + " hoverDoCirculo";
            }
        }
    } 

    return (
        <div className={classe}></div>
    );
}

export default Celula;