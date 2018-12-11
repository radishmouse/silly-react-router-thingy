import React from 'react';
import { Link } from 'react-router-dom';

const Dogs = (props) => {

    const dogListItems = props.dogList.map((dogName, index) => {
        const dogLinkPath = `/dogs/${dogName}`;
        return (
            <li key={index}>                
                <Link to={dogLinkPath}>{dogName}</Link>
            </li>
        );
    });

    return (
        <React.Fragment>
            <h1>DAGS</h1>
            <ul>
                {dogListItems}
            </ul>
        </React.Fragment>  
    );

    // return (
    //     React.createElement('div', null, 
    //         React.createElement('h1', null, 'DAGS'),
    //         React.createElement('ul', null, dogListItems)
    //     )
    // )


};

export default Dogs;