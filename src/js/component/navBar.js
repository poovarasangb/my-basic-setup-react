
import { useCallback, useState } from "react";
import "scss/navBar.scss";

const tabs = [
    {
        id: "home",
        name: "Home",
        content: "Home Page"
    }, {
        id: "about",
        name: "About",
        content: "About Page"
    }, {
        id: "news",
        name: "News",
        content: "News Page"
    }, {
        id: "contact",
        name: "Contact",
        content: "Contact Page"
    }
];

const Tab = ({name, content, setView}) => {
    const handleClick = useCallback(() => {
        setView(content);
    }, [content, setView]);

    return (
        <a className="nav-tab" onClick={handleClick}>
            {name}
        </a>
    );
};

const NavBar = () => {
    const [view, setView] = useState(tabs[0].content);
    return (
        <div className="layout-column justify-content-center align-items-center">
            <div
                className="layout-row justify-content-around align-items-center mt-20 links"
            >
                {
                tabs.map(({name, id, content}) => (
                    <Tab key={id} name={name} setView={setView} content={content} />
                ))
            }
            </div>

            <div className="card w-20 ma-0">
                <section className="card-text">
                    <span className="content">
                        {view}
                    </span>
                </section>
            </div>
        </div>
    );
};

export default NavBar;