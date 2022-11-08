import React from 'react';
import HornedBeast from './HornedBeast.js';
import Data from './data.json';

class Main extends React.Component {
    render() {

        let beastArr = [];
        Data.forEach((beast) => {
            beastArr.push(<HornedBeast
                title={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
            />)
        });

        return (
            <>
                <main>
                    {beastArr}
                </main>
            </>
        );
    }
}

export default Main;