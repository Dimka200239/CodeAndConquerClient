import '../Styles/documents.css';
import '../Styles/main.css';
import '../Styles/login.css';

const LogInPage = () => {
    return (
        <div className="main mainLog">
            <div className="logInBlock">
                <form className="logInForm" name="logForm">
                    <fieldset>
                        <label>
                            <p>Email:</p>
                            <input name="emailLog" />
                        </label>
                        <label>
                            <p>Пароль:</p>
                            <input name="passwordLog" type="password" />
                        </label>
                        <br className="clear"/>
                        <button type="submit" className="logButton">Войти</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export {LogInPage}