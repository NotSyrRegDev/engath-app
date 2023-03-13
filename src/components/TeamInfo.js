import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const TeamInfo = () => {

  
  const {reportCase} = useContext(AppContext);
  const [caseItem , setCaseItem ] = reportCase;

  const sendForm = () => {
    console.log("working")
    console.log(caseItem)
}



  return (
    <div className="main_case_info mt-5">

    <h1 className="section_headline_sm">  معلومات الفرقة </h1>

    <div className="action_div">

<label htmlFor="auto_number" className="label_form" >  قائد  الفرقة <span className="star_required">*</span> </label>
<input type="text" readOnly id='auto_number' value="5124" className="input_form read_only_input " />

</div>

    <div className="action_div">

<label htmlFor="auto_number" className="label_form" >  اعضاء الفرقة<span className="star_required">*</span> </label>

    <div className="teams_inputs_div">
    <input type="text" readOnly id='auto_number' value="احمد" className="input_form read_only_input" />
    <input type="text" readOnly id='auto_number' value="علي" className="input_form read_only_input" />
    <input type="text" readOnly id='auto_number' value="اسامة" className="input_form read_only_input" />
    <input type="text" readOnly id='auto_number' value="خالد" className="input_form read_only_input" />
    </div>


</div>

<button className="mt-3 btn back_btn w-100"  onClick={() => sendForm() } > ارسال </button>

  

    </div>
  )
}

export default TeamInfo