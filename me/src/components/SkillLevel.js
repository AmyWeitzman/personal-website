import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import '../App.css';
import './SkillLevel.css';

function SkillLevel(props) {
    // get ranking and display correct number of stars
    // const stars = [];
    // for(let i = 0; i < props.details.level; i++) {
    //     items.push(< key={index}>{value}</li>)
    // }

    return (
        // className={`badge ${props.color} ${props.bg} border-${props.color}`}
        <div className="skill-content">
            <p className="skill-name">{props.skill}</p>
            <StarRatingComponent 
                name={props.skill}
                editing={false}
                starCount={5}
                value={props.level}
                starColor="#9034c7"
                emptyStarColor="#d3d2d4"
                className="stars"
            />
        </div>  
    );
}

export default SkillLevel;