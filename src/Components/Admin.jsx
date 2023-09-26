import '../Styles/documents.css';
import '../Styles/main.css';
import '../Styles/Admin.css';

const Admin = () => {
    return (
        <div className="main mainAdmin">
            <div className="adminBlock">
                <form className="adminForm" name="adminForm">
                    <input name="adminPassword" type="password"/>
                    <button type="submit" className="adminButton">Войти</button>
                </form>
            </div>
        </div>
    )
}

export {Admin};