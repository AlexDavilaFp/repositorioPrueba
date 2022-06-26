const AboutMe = ({Title , Item1 , Item2 , Item3 , Color}) => {

    const click = () => {
        alert(Title)
    }

    return (
        <div>
            <div className="card" style={{backgroundColor:Color}} onClick={click}>
                <h3>{Title}</h3>
                <ul>
                    <li>{Item1}</li>
                    <li>{Item2}</li>
                    <li>{Item3}</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutMe;