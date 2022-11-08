import React from 'react';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: 0
        };
    }

    handleFavorite = () => {
        // increment the number of favorites by one
        this.setState ({
            favorites: this.state.favorites + 1
        });
    };


    render() {
        return (
            <>
                <article>
                    <h2>{this.props.title}</h2>
                    <img onClick={this.handleFavorite} src={this.props.imageUrl} alt="{this.props.description}" title="{this.props.title}"/>
                    <p className='favorite'>💙 {this.state.favorites} favorited</p>
                    <p>{this.props.description}</p>
                </article>
            </>
        );
    }
}

export default HornedBeast;