import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

const EPRInfo = ( {handleSliding} ) => {

  const {reportCase} = useContext(AppContext);

  const [ caseReported , setCaseReported ] = useState('');
  const [ caseFounded , setCaseFounded ] = useState('');
  const [ docRequested , setDocRequested ] = useState(false);
  const [ attrTeamNumber , setAttrTeamNumber ] = useState('');

  const [caseItem , setCaseItem ] = reportCase;


  const pushIntoCase = (  ) => {


    let tempObject = {
      caseReported , 
      caseFounded ,
      docRequested,
      attrTeamNumber
  }

    setCaseItem(oldArray => [...oldArray, tempObject]);
   
  }

  const setNext = () => {
    pushIntoCase();
    handleSliding(+1);

  } 

  return (
    <div className="main_case_info mt-5">

    <h1 className="section_headline_sm">   بيانات الحالة </h1>

    <div className="action_div">

<label htmlFor="name" className="label_form">  رمز الحالة المبلغ عنها  <span className="star_required">*</span> </label>
<input type="text" id='name' value={caseReported} onChange={(e) => setCaseReported(e.target.value) } placeholder='رمز الحالة المبلغ عنها ' className="input_form" />
    
</div>

<div className="action_div">

<label htmlFor="name" className="label_form"> رمز الحالة التي وجدت     <span className="star_required">*</span> </label>
<input type="text" id='name' value={caseFounded} onChange={(e) => setCaseFounded(e.target.value) }  placeholder='رمز الحالة التي وجدت ' className="input_form" />
    
</div>

<div className="action_div">

<label htmlFor="name" className="label_form"> هل تم طلب اسناد ؟    </label>

  <div className="d-flex-c f-sv f-wrap btns_action_div">
    <button className="btn back_btn" onClick={() => setDocRequested(true) } > نعم </button>
    <button className="btn back_btn" onClick={() => setDocRequested(false) } > لا </button>
  </div>
    
</div>

<div className="action_div">

<label htmlFor="name" className="label_form">  عدد فرق الاسناد  <span className="star_required">*</span> </label>
<input type="text" id='name' value={attrTeamNumber} onChange={(e) => setAttrTeamNumber(e.target.value) }   placeholder='عدد فرق الاسناد' className="input_form" />
    
</div>

<button className="mt-3 btn back_btn w-100" onClick={ () => setNext() }  > التالي </button>

    </div>
  )
}

export default EPRInfo