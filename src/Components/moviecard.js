import React from 'react';
class Moviecard extends React.Component{
    render(){
        const {movie}=this.props;
        return(
            <div>
                {movie.title}
            </div>
        )
    }
} 

export default Moviecard;
