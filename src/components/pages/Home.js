import React from 'react';
import ContentInit from '../contentInit/ContentInit';

const Home = () => {
    return (
        <ContentInit>
            <div className="container-home">
                <div className="content-home">
                    <h1 className="home-title">Users and Jobs App</h1>
                    <h3 className="home-subtitle">This app was created to 
                        implement hook: useContext.</h3>
                    <p>In the Users Section you can add a new user. You can also 
                        edit and delete an existing user. In the Jobs Section 
                        you can edit and delete.</p>
                </div>
            </div>
        </ContentInit>
    );
}

export default Home;
