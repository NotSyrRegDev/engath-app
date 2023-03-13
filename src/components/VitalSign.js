import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

const VitalSign = ( { handleSliding } ) => {

    const {reportCase} = useContext(AppContext);

   
    const [caseItem , setCaseItem ] = reportCase;

    const [measureTime , setMeasureTime] = useState('');
    const [pulse , setPulse] = useState('');
    const [oxygen , setOxygen] = useState('');
    const [bloodPleasure , setBloodPleasure] = useState('');
    const [sugar , setSugar] = useState('');
    const [breathing , setBreathing] = useState('');
    const [heat , setHeat] = useState('');
    const [halaskoScale , setHalaskoScale] = useState('');


  
  
    const pushIntoCase = (  ) => {
  
  
      let tempObject = {
        measureTime,
        pulse,
        oxygen,
        bloodPleasure,
        sugar,
        breathing,
        heat,
        halaskoScale
    }
  
      setCaseItem(oldArray => [...oldArray, tempObject]);
     
    }
  
    const setNext = () => {
      pushIntoCase();
      handleSliding(+1);
  
    }

  return (
    <div className="main_case_info mt-5">

    <h1 className="section_headline_sm">    المؤشرات الحيوية </h1>

    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">  وقت القياس  </label>

  <input type="number" className="time_input" value={measureTime} onChange={(e) => setMeasureTime(e.target.value) } />
    
</div>

    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">  النبض  </label>

<input type="number" className="time_input" value={pulse} onChange={(e) => setPulse(e.target.value) } />
    
</div>

    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">  نسبة الاوكسجين  </label>
<input type="number" className="time_input" value={oxygen} onChange={(e) => setOxygen(e.target.value) } />
    
</div>

    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">   ضغط الدم  </label>
<input type="number" className="time_input" value={bloodPleasure} onChange={(e) => setBloodPleasure(e.target.value) } />
    
</div>

    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">   السكر  </label>
<input type="number" className="time_input" value={sugar} onChange={(e) => setSugar(e.target.value) } />
    
</div>

    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">   معدل التنفس  </label>
<input type="number" className="time_input" value={breathing} onChange={(e) => setBreathing(e.target.value) } />
    
</div>

    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">    الحرارة  </label>
<input type="number" className="time_input" value={heat} onChange={(e) => setHeat(e.target.value) } />
    
</div>

    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">    مقياس جلاسكو  </label>
<input type="number" className="time_input" value={halaskoScale} onChange={(e) => setHalaskoScale(e.target.value) } />
    
</div>

<button className="mt-3 btn back_btn w-100" onClick={ () => setNext() }  > التالي </button>




    </div>
  )
}

export default VitalSign