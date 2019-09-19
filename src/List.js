import React, {Component} from 'react';
import stormy from './img/stormy.png';
import rainy from  './img/rainy.png';
import warm from  './img/warm.png';

//import Time from './Time'


class List extends Component {
    /*constructor(props){
        super(props);
    } */

    handleClick = (e) => {
        // let show = e.target.nextElementSibling;
        let elementid = this.props.id;

        const id = document.getElementById(elementid);
     //   console.log(id);


        id.style.display === "flex" ? id.style.display = "none"
            :

            id.style.display = "flex";

    }

    render() {

        let{weather, description, id, day, details} = this.props;

        let img //= stormy;
        if (weather == "Clouds"){
            img= stormy
        } else if(weather == "Rain"){
            img= rainy;
        }else{
            img= warm
        }
        return (
            <div>
                <h6> {day}  </h6>
                <img  style={{ margin: 2 + "%" }} src={img} alt="weather"/>
                <h6 > Status: {weather} </h6> <h6> Description : {description} </h6>
                <button className="btn" onClick={this.handleClick.bind(this) } > View Weather Details </button>
                <div className="modal-weathercontent" id={id}>
                    <button className="btn" onClick={this.handleClick.bind(this) } > Back </button>
                    <div className="hours">
                        <h4 style={{ fontWeight: "lighter" }}>Weather Details for {day} </h4>
                        <Time details={details}/>
                    </div>

                </div>
            </div>

        )
    }
}


function Time(props) {
    let {details}= props;
    return( 
        <div className="hourlist mt-4">
            <div className="hour">
                <h5>Humidity: <span>{details.humidity}</span> </h5>
            </div> 
             <div className="hour">
                <h5>Pressure: <span>{details.pressure}</span> </h5>
            </div> 
             <div className="hour">
                <h5>Sea Level: <span>{details.sea_level}</span> </h5>
            </div> 
             <div className="hour">
                <h5>Temperature: <span>{details.temp}</span> </h5>
            </div> 
             <div className="hour">
                <h5>Min-Temperature: <span>{details.temp_min}</span> </h5>
            </div> 
             <div className="hour">
                <h5>Max-Temperature: <span>{details.temp_max}</span> </h5>
            </div> 
        </div>
      )
}
export default List; 