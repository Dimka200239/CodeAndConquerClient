import '../Styles/documents.css';
import '../Styles/main.css';
import '../Styles/register.css';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    const handleSubmit  = () => { navigate('/confirmEmail'); };

    return (
        <div className="main mainReg">
            <div className="registerBlock">
                <form className="registerForm" name="regForm">
                    <fieldset>
                        <label>
                            <p>Email:</p>
                            <input name="email" />
                        </label>
                        <label>
                            <p>Имя/Никнейм:</p>
                            <input name="name" />
                        </label>
                        <label>
                            <p>Придумайте пароль:</p>
                            <input name="createPassword" type="password" />
                        </label>
                        <label>
                            <p>Повторите пароль:</p>
                            <input name="repeatPassword" type="password" />
                        </label>
                        <br className="clear"/>
                        <button type="submit" className="regButton" onClick={handleSubmit}>Зарегестрироваться</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export {RegisterPage}