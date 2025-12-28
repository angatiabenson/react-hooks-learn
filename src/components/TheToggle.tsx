import { useState } from "react";

export function TheToggle() {
    const title = "Breaking News";
    const content = `Andrej Karpathy, Tesla's former AI director and OpenAI cofounder, has issued what amounts to an open letter to the entire software engineering profession, warning that developers face an unprecedented challenge as AI fundamentally reshapes how code gets written. In a post on X that has sparked widespread debate, Karpathy confessed: "I've never felt this much behind as a programmer. The profession is being dramatically refactored as the bits contributed by the programmer are increasingly sparse and between."`

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