import React, {useState, useEffect} from 'react'
import './ChooseState.css'
import BgOuter from '../../components/bgOuter/BgOuter'
import BgInner from '../../components/bgInner/BgInner'
import Button from '../../components/button/Button'
import Input from '../../components/inputBox/Input'
import Dropdown from '../../components/Dropdown/Dropdown'
import { Country, State, City } from 'country-state-city';
import { useNavigate } from 'react-router-dom'

const ChooseState = () => {

    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [districts, setDistricts] = useState([]);
    const navigate = useNavigate();

    const onNext = () => {
      navigate('/personal')
    } 

    const onPrev = () => {
      navigate('/register')
    }
  
    useEffect(() => {
      const countryCode = "IN";
      const fetchedStates = State.getStatesOfCountry(countryCode);
      setStates(fetchedStates);
    }, []);
  
    const handleStateChange = (stateCode) => {
      setSelectedState(stateCode);
  
      // Fetch districts (cities) for the selected state
      const fetchedDistricts = City.getCitiesOfState("IN", stateCode);
      setDistricts(fetchedDistricts);
    };

  return (
    <>
        <BgOuter text={"Where are you from ?"} onPrev = {onPrev} />
        <BgInner>
            <div className="state">
                <Dropdown 
                name="Select State"
                options={states}
                onChange={(e) => handleStateChange(e.target.value)}
                />
                <Dropdown 
                name="Select District"
                options={districts}
                disabled={!selectedState}
                />
                <Input pholder={'pincode'}/>
            </div>
            <Button name = {'Next'} onClick={onNext}/>
        </BgInner>
    </>
  )
}

export default ChooseState