import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

const PatientInfoTwo = ( { handleSliding  } ) => {

  const {reportCase} = useContext(AppContext);

  const [sensitiveStatus , setSensitiveStatus] = useState('');
  const [datePatient , setDatePatient] = useState('');
  const [compilimentPatient , setCompilmentPatient] = useState('');
  const [clinicPatient , setClinitPatient] = useState('');
  const [propertiesPatient , setPropertiesPatient] = useState('');
  const [propertiesLeftWith , setPropertiesLeftWith] = useState('');
  const [propertiesWith , setPropertiesWith] = useState('');

   
  const [caseItem , setCaseItem ] = reportCase;


  const pushIntoCase = (  ) => {


    let tempObject = {
      
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

<label htmlFor="name" className="label_form">  هل توجد حساسية لأدوية معينة ؟  </label>
<input type="text" id='name' value={sensitiveStatus} onChange={(e) => setSensitiveStatus(e.target.value) } placeholder='نعم ؟ اذكرها' className="input_form" />
    
</div>

<div className="action_div">

<label htmlFor="name" className="label_form"> شكوى المريض    </label>

<input type="text" id='name' placeholder='شكوى المريض' value={compilimentPatient} onChange={(e) => setCompilmentPatient(e.target.value) } className="input_form height_form" />

</div>

<div className="action_div">

<label htmlFor="name" className="label_form">  التاريخ المرضي    </label>

<input type="date" id='name' placeholder=' التاريخ المرضي ' value={datePatient} onChange={(e) => setDatePatient(e.target.value) } className="input_form" />

</div>

<div className="action_div">

<label htmlFor="name" className="label_form">   الفحص السريري    </label>

<input type="text" id='name' placeholder='الحالة المرضية بالفصيل' value={clinicPatient} onChange={(e) => setClinitPatient(e.target.value) } className="input_form height_form" />

</div>

<div className="action_div">

<label htmlFor="name" className="label_form">    ممتلكات المريض التي وجدت معه    </label>

<input type="text" id='name' placeholder='ممتلكات المريض التي وجدت معه ' value={propertiesPatient} onChange={(e) => setPropertiesPatient(e.target.value) } className="input_form" />

</div>

<div className="action_div">

<label htmlFor="name" className="label_form"> الممتلكات تركت مع     </label>

<select name="gender" id="" className="input_form" value={propertiesLeftWith} onChange={(e) => {
        const selectedStatus = e.target.value;
        setPropertiesLeftWith(selectedStatus);
      }} >
    <option value=""> اختر </option>
    <option value="male">   المستشفى </option>
    <option value="female"> المريض أو اقاربه </option>
    <option value="female"> الشرطة </option>
    <option value="female"> أخرى </option>

</select>
    
</div>


<div className="action_div">

<label htmlFor="name" className="label_form">    الممتلكات توجد مع   </label>

<input type="text" id='name' placeholder='اسم المستلم' value={propertiesWith} onChange={(e) => setPropertiesWith(e.target.value) } className="input_form" />

</div>


<button className="mt-3 btn back_btn w-100" onClick={ () => setNext() }  > التالي </button>


    </div>
  )
}

export default PatientInfoTwo