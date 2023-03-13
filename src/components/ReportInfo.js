import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const ReportInfo = ( {handleSliding} ) => {

  const {reportCase} = useContext(AppContext);

 
  const [caseItem , setCaseItem ] = reportCase;


  const generateCaseNumber = () => {
    return Math.floor(Math.random()*(999-100+1)+100);
  }

  const generateDate = () => {
    const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

  return `${year}-${month}-${day}`;

  }

  const setNext = () => {
    
    pushIntoCase();
    handleSliding(+1);

  } 

  const pushIntoCase = (  ) => {

    let caseNumber = generateCaseNumber();
    let currentDate = generateCaseNumber();
    let teamId = user.teamId;


    let tempObject = {
      caseNumber,
      currentDate,
      teamId
  }

  setCaseItem(oldArray => [...oldArray, tempObject]);

  }

  const user = JSON.parse(localStorage.getItem("engath_user"));

  return (
    <div className="main_case_info mt-5">

    <h1 className="section_headline_sm">  معلومات البلاغ </h1>

    <div className="action_div">

<label htmlFor="auto_number" className="label_form" >  رقم البلاغ <span className="star_required">*</span> </label>
<input type="text" readOnly id='auto_number' value={generateCaseNumber()} className="input_form read_only_input " />

</div>

    <div className="action_div">

<label htmlFor="auto_number" className="label_form" >  تاريخ البلاغ <span className="star_required">*</span> </label>
<input type="text" readOnly id='auto_number' value={generateDate()} className="input_form read_only_input" />

</div>

    <div className="action_div">

<label htmlFor="auto_number" className="label_form" >   رمز الفرقة <span className="star_required">*</span> </label>
<input type="text" readOnly id='auto_number' value={user.teamId} className="input_form read_only_input" />

</div>

    {/* <div className="action_div">

<label htmlFor="auto_number" className="label_form" >    موقع التمركز <span className="star_required">*</span> </label>
<input type="text" readOnly id='auto_number' value="5124" className="input_form read_only_input" />

</div> */}

<button className="mt-1 btn back_btn w-100" onClick={ () => setNext() }  > التالي </button>


    </div>
  )
}

export default ReportInfo