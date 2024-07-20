import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
    const timeGraphic = minutes <= 29 ? '☕'.repeat(Math.ceil(minutes / 5)) : '🍱'.repeat(Math.ceil(minutes / 10));

    return(
        <article>
            <h3>{title}</h3>
            <small>{date} • {timeGraphic} {minutes} minute read</small>
            <p>{preview}</p>
        </article>
    );
};

export default Article;