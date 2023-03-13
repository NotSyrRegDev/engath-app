import React, { useContext , useEffect } from 'react'
import { AppContext } from '../context/AppContext';

const TimesReport = ( { handleSliding } ) => {

    const {reportCase} = useContext(AppContext);
    let date = new Date();
   
    const [caseItem , setCaseItem ] = reportCase;
  
  
    const pushIntoCase = (  ) => {
  
  
      let tempObject = {
        
    }
  
      setCaseItem(oldArray => [...oldArray, tempObject]);
     
    }

    const getHours = () => {
        var current_time = date.getHours();
        return current_time;
    }

    const getMinitues = () => {
        var current_time = date.getMinutes();
        return current_time;
    }

    useEffect(() => {
        getHours();
        getMinitues();
    } , [])
   

  

    const setNext = () => {
        pushIntoCase();
        handleSliding(+1);
    
      } 

  return (
    <div className="main_case_info mt-5">

    <h1 className="section_headline_sm">    اختيار المواقيت </h1>
    
    <div className="mt-2"></div>
    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">  استقبال البلاغ <span className="star_required">*</span> </label>

    <div className="d-flex-c f-wrap times_row">
        <input type="number" className="time_input" value={getHours()} />
        <span className="dot_time">:</span>
        <input type="number" className="time_input" value={getMinitues()} />
    </div>
    
</div>

    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">   التحرك باتجاه الموقع <span className="star_required">*</span> </label>

    <div className="d-flex-c f-wrap times_row">
        <input type="number" className="time_input" value={getHours()} />
        <span className="dot_time">:</span>
        <input type="number" className="time_input" value={getMinitues()} />
    </div>
    
</div>

    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">    الوصول الى الموقع <span className="star_required">*</span> </label>

    <div className="d-flex-c f-wrap times_row">
        <input type="number" className="time_input" value={getHours()} />
        <span className="dot_time">:</span>
        <input type="number" className="time_input" value={getMinitues()} />
    </div>
    
</div>

    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">   مباشرة الحالة <span className="star_required">*</span> </label>

    <div className="d-flex-c f-wrap times_row">
        <input type="number" className="time_input" value={getHours()} />
        <span className="dot_time">:</span>
        <input type="number" className="time_input" value={getMinitues()} />
    </div>
    
</div>

    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">    التحرك باتجاه الرعاية الطبية <span className="star_required">*</span> </label>

    <div className="d-flex-c f-wrap times_row">
        <input type="number" className="time_input" value={getHours()} />
        <span className="dot_time">:</span>
        <input type="number" className="time_input" value={getMinitues()} />
    </div>
    
</div>

    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">    الوصول للرعاية الطبية <span className="star_required">*</span> </label>

    <div className="d-flex-c f-wrap times_row">
        <input type="number" className="time_input" value={getHours()} />
        <span className="dot_time">:</span>
        <input type="number" className="time_input" value={getMinitues()} />
    </div>
    
</div>

    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">      تسليم الحالة او الغاء البلاغ <span className="star_required">*</span> </label>

    <div className="d-flex-c f-wrap times_row">
        <input type="number" className="time_input" value={getHours()} />
        <span className="dot_time">:</span>
        <input type="number" className="time_input" value={getMinitues()} />
    </div>
    
</div>

    <div className="action_div d-flex-c f-sp">

<label htmlFor="name" className="label_form">    الاستعداد لبلاغ آخر <span className="star_required">*</span> </label>

    <div className="d-flex-c f-wrap times_row">
        <input type="number" className="time_input" value={getHours()} />
        <span className="dot_time">:</span>
        <input type="number" className="time_input" value={getMinitues()} />
    </div>
    
</div>

<button className="mt-3 btn back_btn w-100" onClick={ () => setNext() }  > التالي </button>


    </div>
  )
}

export default TimesReport