import React, {Component} from 'react';
//import headerimg from './img/headerimg.png';
//import days from './weather';
import './App.css';
import List from './List';



class App extends Component {

  constructor() {
    super();
    this.state = {
      forecast: '',
      city: '',
    }


  }

  

  componentWillMount() {

    const key = process.env.REACT_APP_WEATHER_API_KEY;

    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=2332459&APPID=${key}`)
      .then(res => res.json())
      .then(
      (data) => {
        this.setState({
          forecast: data.list,
          city: data.city
        })
      }
      )
  }


  render() {

    let {forecast, city} = this.state;
 
    let list;
    if (forecast) {
      list = forecast.map((day) => {
        return (
          <List day = {day.dt_txt} key={day.dt} id={day.dt} img={day.weather.map(mainw => mainw.icon)} weather={day.weather.map(mainw => mainw.main) }  description={day.weather.map(mainw => mainw.description) } details={day.main} />
        )
      })
    }
    else {
     list = <h2> Loading..</h2>
    }
    return (
      <div className="App">
        <header className="App-header">
          <h3 style={{ margin: 2 + "%", fontWeight: 500 }}>
            Weather Forecast for {city.name} --Timezone:  {city.timezone}
          </h3>
          <div  className="list" >
            { list}
          </div>

        </header>

      </div>
    )

  }
}

export default App;
