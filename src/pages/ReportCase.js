import React , {useContext, useState , useEffect} from 'react';
import './ReportCase.css';
import ActionTaken from '../components/ActionTaken';
import EPRInfo from '../components/EPRInfo';
import PatientInfo from '../components/PatientInfo';
import ReportInfo from '../components/ReportInfo';
import TeamInfo from '../components/TeamInfo';
import VitalSign from '../components/VitalSign';
import TimesReport from '../components/TimesReport';
import LocationCase from '../components/LocationCase';
import PatientInfoTwo from '../components/PatientInfoTwo';
import { AppContext } from '../context/AppContext';
import { useGeolocated } from "react-geolocated";


const ReportCase = () => {


    const { coords  } =
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });


    const {reportCase} = useContext(AppContext);

    const {coordsLocation} = useContext(AppContext);

    const [caseItem , setCaseItem ] = reportCase;

    const [coordsValue , setCoordsValue ] = coordsLocation;
      
    const [indexSlide , setIndexSlide] = useState(1);

    useEffect(() => {
        setCoordsValue(coords);
    } , [])

    
    const handleSliding = (argument) => {

        if (indexSlide <= 0  ||  indexSlide >= 9 ) {
            setIndexSlide(1);
        }
        else {
           
            setIndexSlide(indexSlide + argument);
        }


    }

    const sendForm = () => {
        console.log("working")
        console.log(caseItem)
    }

    function determineComponent(  )  {

        switch(indexSlide) {
            case 1:
                return <ReportInfo handleSliding={handleSliding} />;

            case 2:
                return <EPRInfo handleSliding={handleSliding} />;

            case 3:
                return <TimesReport handleSliding={handleSliding} />;

            case 4:
                return <LocationCase handleSliding={handleSliding} />;

            case 5:
                return <PatientInfo handleSliding={handleSliding} />;

            case 6:
                return <PatientInfoTwo handleSliding={handleSliding} />;

            case 7:
                return <VitalSign handleSliding={handleSliding} />;

            case 8:
                return <ActionTaken handleSliding={handleSliding} />;

            case 9:
                return <TeamInfo handleSliding={handleSliding} />;

        }
    }


  return (
    <div className="form_main_div mt-5">

<h1 className="section_headline_big">  الابلاغ عن حالة جديدة </h1>

{determineComponent()}

    <div className=" section_slidign">
    
   
   {indexSlide > 1 && (
    <button className="mt-1 btn prev_btn w-100" onClick={ () => handleSliding(-1) }  > السابق </button>
   )}
   
    </div>
  


</div>
  )
}

export default ReportCase