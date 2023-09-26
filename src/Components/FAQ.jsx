import '../Styles/documents.css';
import '../Styles/main.css';
import '../Styles/faq.css'
import { FAQBlockOfANQ } from './FAQBlockOfANQ';

const FAQ = () => {
    return (
        <div className="main mainFaq">
            <div className="ANQ">
                <FAQBlockOfANQ />
                <FAQBlockOfANQ />
            </div>
        </div>
    )
}

export {FAQ};