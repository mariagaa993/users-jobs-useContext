import React from "react";
import './ContentInit.scss';

const ContentInit = ({ children }) => {
    return(
        <section className="content-init">
            {children}
        </section>
    );
}

export default ContentInit;
