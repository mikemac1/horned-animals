import React from 'react';
import HornedBeast from './HornedBeast.js';
import './App.css';

class Main extends React.Component {
    render() {
        return (
            <>
                <main>
                    <HornedBeast
                        title="Big Horn Ram"
                        imageUrl="https://images.squarespace-cdn.com/content/v1/579924e8e58c62c0252c4d9b/1519227700264-R9PI7DDPHCYXG4KAZWWS/world-record-bighorn-bynum-392.JPG"
                        description="Big Horn Ram in Colorado"
                    >
                    </HornedBeast>
                    <HornedBeast
                        title="Elk"
                        imageUrl="https://daily.jstor.org/wp-content/uploads/2021/08/the_slaughter_of_elk_at_yellowstone_national_park_1050x700.jpg"
                        description="Elk in Alaska"
                        >
                    </HornedBeast>
                </main>
            </>
        );
    }
}

export default Main;