
const Stack = () => {

    const click = () => {
        alert("Mis Stacks")
    }

    return (
        <div className="card" style={{ background: "yellow" }} onClick={click}>
            <h3>Mi Stack es</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        </div>
    );
};

export default Stack;