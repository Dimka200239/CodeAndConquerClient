import '../Styles/documents.css';
import '../Styles/main.css';
import '../Styles/InfoAboutProblems.css';
import { useNavigate } from 'react-router-dom';

const InfoAboutProblems = () => {
    const navigate = useNavigate();

    const handleSubmit  = () => { navigate('/confirmEmail'); };

    return (
        <div className="main mainProb">
            <div className="probBlock">
                <form className="probForm" name="probForm">
                    <fieldset>
                        <label>
                            <p>Email:</p>
                            <input name="emailProb"/>
                        </label>
                        <br className="clear"/>
                        <button type="submit" className="probButton" onClick={handleSubmit}>Подтвердить</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export {InfoAboutProblems}