import '../Styles/documents.css';
import '../Styles/main.css';
import '../Styles/SearchWithoutAuth.css';

const SearchWithoutAuthorization = () => {
    return (
        <div className="main mainFindTasks">
            <div className="findTasksBlock">
                <form className="findTasksForm" name="findTaskForm">
                    <input name="taskFind"/>
                    <button type="submit" className="findTasksButton">Найти</button>
                </form>
            </div>
        </div>
    )
}

export {SearchWithoutAuthorization};