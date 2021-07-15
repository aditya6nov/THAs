const card = (props) => {

    return(
        <div className="container">
            <div className="card-container">
                <h2>{props.h1}</h2>
                <h3>calories contain {props.title}</h3>
            </div>
        </div>
    );
};

export default card;