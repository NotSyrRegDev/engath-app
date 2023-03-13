import React, { useState , useContext } from 'react'
import { AppContext } from '../context/AppContext';

const PatientInfo = ( {handleSliding} ) => {

  const {reportCase} = useContext(AppContext);

  
  const [ patientName , setPatientName ] = useState('');
  const [ patientAge , setPatientAge ] = useState('');
  const [ patientNotion , setPatientNotion ] = useState('');
  const [ patientId , setPatientId ] = useState('');
  const [ patientGender , setPatientGender ] = useState('');
  const [ hurtStatus , setHurtStatus ] = useState('');
  const [ patientStatus , setPatientStatus ] = useState('');
   
  const [caseItem , setCaseItem ] = reportCase;


  const pushIntoCase = (  ) => {


    let tempObject = {
      patientName,
      patientAge,
      patientNotion,
      patientId,
      patientGender,
      hurtStatus,
      patientStatus
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

<label htmlFor="name" className="label_form">  اسم المريض <span className="star_required">*</span> </label>
<input type="text" id='name' placeholder='الاسم' value={patientName} onChange={(e) => setPatientName(e.target.value) } className="input_form" />
    
</div>

<div className="action_div">

<label htmlFor="name" className="label_form"> عمر المريض   <span className="star_required">*</span> </label>

<input type="number" id='name' value={patientAge} onChange={(e) => setPatientAge(e.target.value) } placeholder='العمر' className="input_form" />

</div>

<div className="action_div">

<label htmlFor="name" className="label_form"> الجنسية    <span className="star_required">*</span> </label>
<input type="text" id='name' placeholder='الجنسية' value={patientNotion} onChange={(e) => setPatientNotion(e.target.value) } className="input_form" />
    
</div>

<div className="action_div">

<label htmlFor="name" className="label_form"> رقم الهوية   </label>

<input type="number" id='name' placeholder='رقم الهوية' value={patientId} onChange={(e) => setPatientId(e.target.value) } className="input_form" />

</div>

<div className="action_div">

<label htmlFor="name" className="label_form"> الجنس    <span className="star_required">*</span> </label>

<div className="d-flex-c f-sv f-wrap btns_action_div">
    <button className="btn back_btn" onClick={() => setPatientGender('male') } > ذكر </button>
    <button className="btn back_btn" onClick={() => setPatientGender('female') } > أنثى </button>
  </div>
    
</div>


<div className="action_div">

<label htmlFor="name" className="label_form"> نوع الحالة    <span className="star_required">*</span> </label>

<div className="d-flex-c f-sv f-wrap btns_action_div">
    <button className="btn back_btn" onClick={() => setHurtStatus('infection') } > اصابة</button>
    <button className="btn back_btn" onClick={() => setHurtStatus('sick') } > مرضية </button>
  </div>
    
</div>

<div className="action_div">

<label htmlFor="name" className="label_form"> وضع الحالة    <span className="star_required">*</span> </label>

<select name="gender" id="" className="input_form" value={patientStatus} onChange={(e) => {
        const selectedStatus = e.target.value;
        setPatientStatus(selectedStatus);
      }} >
    <option value=""> اختر وضع الحالة </option>
    <option value="male">  مستقرة  </option>
    <option value="female"> متوسطة </option>
    <option value="female"> حرجة </option>
    <option value="female"> متوفية </option>

</select>


    
</div>
<button className="mt-1 btn back_btn w-100" onClick={ () => setNext() }  > التالي </button>



    </div>
  )
}

export default PatientInfo