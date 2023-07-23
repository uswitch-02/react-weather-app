import { useState } from "react" ;
import axios from "axios";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState({
      country: "",
      cityName: "",
      temperature: "",
      conditionText:"",
      icon: ""
  });
  const getWeather = (e) => {
    e.preventDefault();
        axios.get("https://api.weatherapi.com/v1/current.json?key=210b8e4818a4439694091142232207&q=London&aqi=no")
          .then(res => {
              setResults({
                    country:"" ,
                    cityName:"",
                    temperature:"" ,
                    conditionText:"" ,
                    icon:""
                })
          })
  }
  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results />
    </div>
  );
}

export default App;
