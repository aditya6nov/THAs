import Box from "./Box";
const card = () => {
    return(
        <div className="container">
            <div className="card">
                <img src="https://i.imgflip.com/53mof4.jpg"></img>
                <h1>React card</h1>
                <p>this is </p>
            </div>
            <div className="secondCard">
                   <Box />
            </div>
            </div>
    );
};
export default card;