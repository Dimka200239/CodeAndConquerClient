import { Link, Outlet } from 'react-router-dom'
import React from 'react';
import '../Styles/documents.css';
import '../Styles/footer.css';
import '../Styles/header.css';
import '../Styles/main.css';

const Layout = () => {
    return (
        <>
            <div className="header">
                <div className="headerSiteName">
                    <h1>C&C</h1>
                </div>
                <div className="headerNavigation">
                    <nav>
                        <Link to="/">На главную</Link>
                        <Link to="/about">О сайте</Link>
                        <Link to="/FAQ">FAQ</Link>
                    </nav>
                </div>
            </div>

            <Outlet />

            <div className="footer">
                <div className="contact">
                    <h4>Для рекомендаций и отзывов:</h4>
                    <span className="clear">Email: dima.geogiev.2016@mail.ru</span>
                    <span className="clear">Gmail: dima.geogiev.2016@mail.ru</span>
                    <span className="clear">Яндекс.Почта: dima.geogiev.2016@mail.ru</span>
                    <span className="clear">Outlook: dima.geogiev.2016@mail.ru</span>
                </div>
                <div className="siteMap">
                    <h4>Полезные ссылки</h4>
                    <ul>
                        <li><a href="" target="_blank">Основы программирования</a></li>
                        <li><a href="" target="_blank">Основы Python</a></li>
                        <li><a href="" target="_blank">Основы C#</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export {Layout};