import './Listcheckbox.css';
const Listcheck = () => {
    return (
        <div className="Listcheck">
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1"> Clean up bedroom </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault1"> Buy Some milk </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                <label className="form-check-label" htmlFor="flexRadioDefault1"> Jogging </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" />
                <label className="form-check-label" htmlFor="flexRadioDefault1"> Learn React </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault5" />
                <label className="form-check-label" htmlFor="flexRadioDefault1"> Doing excercies </label>
            </div>
        </div>
        
    );
}
export default Listcheck;
