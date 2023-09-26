import '../Styles/documents.css';
import '../Styles/main.css';
import '../Styles/aboutSite.css';
import AuthorImg from '../img/author.jpeg';

const AboutAsPage = () => {
    return (
        <div className="main">
            <div className="basicInfoAboutSitePage">
                <div className="leftSityInfo leftSityInfoPage">
                    <div className="infoAboutSite">
                        <p>На этой странице я бы хотел немного рассказать о данном сайте, а именно: для чего был создан сайт и как.</p>
                        <p>Данный сайт был создан мной в одиночку, это мой первый полноценный web-проект, который я когда-либо создавал, поэтому сайт может быть не достаточно оптимизирован.</p>
                        <p>Основная цель данного сайта - помочь начинающим кодерам разобраться с какими-либо основами программирования по средствам разбора решений различных олимпиадных задач.</p>
                        <p>На сайте вы можете найти решения и подробный разбор различных олимпиадных задач, база данных которых будет со временем пополняться.</p>
                        <p>Создание данного сайта моя личная инициатива, поэтому я также готов поделитсья инструментами, которыми я оперировал при его создании:</p>
                        <ul>
                            <li>Клиентская часть -> React + Redux</li>
                            <li>Серверная часть -> ASP.NET web api</li>
                            <li>База данных -> MS Sql Server</li>
                        </ul>
                        <p>По всем вопросам работы сайта, отзывам и предложениям вы можете обратиться ко мне на любую из перечисленных почт, указанных в футере сайта.</p>
                    </div>
                </div>
                <div className="rightSiteInfoPage">
                    <div className="authorInfoBlockPage">
                        <div className="mainInfoBlockPage">
                            <div className="MNLBlock">
                                Георгиев Дмитрий Сергеевич
                            </div>
                            <div className="imgAuthorPage">
                                <img src={AuthorImg} alt='Фотография автора сайта'/>
                            </div>
                        </div>
                        <div className="infoAboutAuthorPage">
                            <p>Стэк:</p>
                            <ul>
                                <li>C#, React</li>
                                <li>.NET Framework</li>
                                <li>.NET Web Api</li>
                                <li>Windows Forms, WPF</li>
                                <li>HTML, CSS, JavaScript</li>
                                <li>Microsoft SQL Server</li>
                                <li>Git</li>
                                <li>Unit-тесты</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {AboutAsPage};