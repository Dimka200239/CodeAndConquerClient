import '../Styles/documents.css';
import '../Styles/main.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => { navigate('/register'); };
    const handleLoginClick = () => { navigate('/login'); };
    const handleFindWithNoRegisterClick = () => { navigate('/findWithNoAuthorization'); };
    const handleProblemsClick = () => { navigate('/problems'); };

    return (
        <div className="main">
            <div className="basicInfo">
                <div className="leftSityInfo">
                    <div className="infoAboutSite">
                        <h1>C&C - Code and Conquer</h1>
                        <p>Данный слоган был выбран не случайно, в наши дни технологии являются неотъемлимой часть нашей жизни.</p>
                        <p>Данный сайт был разработан в обучающих целях. На этом сайте имеются разборы различных олимпиадных задач по программированию, начиная с теории решения той или иной задачи, заканчивая примером её решения.</p>
                        <p>Также на сайте имеются полезные ссылки на теоритический и практический материалы, на основе которых мы и сами учились.</p>
                    </div>
                </div>
            </div>
            <div className="additionalInfo">
                <div className="logInRegBlock">
                    <div className="logInRegBorder">
                        <button onClick={handleRegisterClick}>
                            Регистрация
                        </button>
                        <button onClick={handleLoginClick}>
                            Войти
                        </button>
                    </div>
                    <div className="findBlock">
                        <button onClick={handleFindWithNoRegisterClick}>
                            Поиск без авторизации
                        </button>
                        <button onClick={handleProblemsClick}>
                            Восстановить пароль
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {HomePage};