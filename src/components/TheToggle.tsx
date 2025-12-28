import { useState } from "react";

export function TheToggle() {
    const title = "Breaking News";
    const content = `Somalia's Al-Qaeda-linked militant group Al-Shabaab vowed Saturday to fight any attempt by Israel "to claim or use parts of Somaliland" following its recognition of the breakaway territory.
"We will not accept it, and we will fight against it," Al-Shabaab said in a statement.

Its spokesman Ali Dheere said in the statement that Israel's recognition of Somaliland as a sovereign state showed it "has decided to expand into parts of the Somali territories" to support "the apostate administration in the northwest regions".`

    const [isReadMore, setIsReadMore] = useState(false);

    function handleToggleReadMore() {
        setIsReadMore(previousValue=>!previousValue);
    }
    return (
        <div>
            <h1>The Toggle</h1>
            <article className="news-card">
                <div className="news-card__media" aria-hidden="true">
                    📰
                </div>
                <div className="news-card__body">
                    <h2 className="news-card__title">{title}</h2>
                    <div className="news-card__meta">World · Dec 28, 2025</div>
                    <p className="news-card__excerpt">
                        {isReadMore ? content : content.slice(0, 220) + (content.length > 220 ? '…' : '')}
                    </p>
                    <div className="news-card__actions">
                        {content.length > 220 && (
                            <button className="news-card__button" onClick={handleToggleReadMore}>
                                {isReadMore ? "Read Less" : "Read More"}
                            </button>
                        )}
                    </div>
                </div>
            </article>
        </div>
    );
}