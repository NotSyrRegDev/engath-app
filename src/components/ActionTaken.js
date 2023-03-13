import React , {useContext, useState} from 'react'
import { AppContext } from '../context/AppContext';

const ActionTaken = ( { handleSliding } ) => {

  const [movedState , setMovedState] = useState(false);
  const [unMovedState , setUnMovedState] = useState(false);

  const {reportCase} = useContext(AppContext);

   
  const [caseItem , setCaseItem ] = reportCase;

  const [caseData , setCaseData] = useState('');
  
  const [transferCase , setTransferCase] = useState('');

  const [transferedTo , setTransferedTo] = useState('');
  const [nonTransferedReason , setNonTransferedReason] = useState('');
  const [reciverName , setReciverName] = useState('');
  const [notes , setNotes] = useState('');
  


  const pushIntoCase = (  ) => {


    let tempObject = {
      caseData,
      transferCase,
      transferedTo,
      nonTransferedReason,
      reciverName,
      notes
  }

    setCaseItem(oldArray => [...oldArray, tempObject]);
   
  }

  const setNext = () => {
    pushIntoCase();
    handleSliding(+1);

  }


 const determineMOved = (param) => {

  switch(param) {
            
    case 'moved':
        setMovedState(true);
        setUnMovedState(false);
        break;

    case 'unmoved':
        setMovedState(false);
        setUnMovedState(true);
        break;

}

}

  const transferedMethod = () => {
    determineMOved('moved');
    setTransferCase(true);
  }

  const nonTransferedMethod = () => {
    determineMOved('unmoved');
    setTransferCase(false);
  }

  return (
    <div className="main_case_info mt-5">

    <h1 className="section_headline_sm">   بيانات الحالة </h1>

    <div className="action_div">

<label htmlFor="name" className="label_form">  الاسعافات الاولية التي تم تقديمها للمريض <span className="star_required">*</span> </label>
<input type="text" id='name' placeholder='الاسعافات' value={caseData} onChange={(e) => setCaseData(e.target.value) } className="input_form height_form" />
    
</div>

<div className="action_div">

<label htmlFor="name" className="label_form">  حالة النقل - هل نقل المريض ؟     <span className="star_required">*</span> </label>

  <div className="d-flex-c f-sv f-wrap btns_action_div">
    <button className="btn back_btn" onClick={() => transferedMethod() } > نقل </button>
    <button className="btn back_btn" onClick={() => nonTransferedMethod() } > لم ينقل </button>
  </div>
    
</div>



{movedState && (
  <div className="action_div">

<label htmlFor="name" className="label_form"> نقل الى    <span className="star_required">*</span> </label>

<div className="d-flex-c f-sv f-wrap btns_action_div mt-1">
    <button className="btn back_btn" onClick={() => setTransferedTo('hospital') } >  مركز صحي \ مستشفى </button>
    <button className="btn back_btn" onClick={() => setTransferedTo('ambulance') } > فرقة اسعافيه </button>
  </div>

<div className="d-flex-c f-sv f-wrap btns_action_div mt-1">
    <button className="btn back_btn" onClick={() => setTransferedTo('volunteer') } >  فرقة تطوعية </button>
    <button className="btn back_btn" onClick={() => setTransferedTo('location') } > عولج بالموقع  </button>
  </div>
    
</div>
)}


{ unMovedState && (

  <div className="action_div">

<label htmlFor="name" className="label_form">  لم ينقل لسبب    <span className="star_required">*</span> </label>

<select name="where" id="" className="input_form">
    <option value=""> اختر السبب </option>
    <option value="male" onClick={() => setNonTransferedReason('solved') } > عولج بالموقع </option>
    <option value="female" onClick={() => setNonTransferedReason('rejected') } >  رفض النقل </option>
    <option value="female" onClick={() => setNonTransferedReason('cancel') } >  الغاء البلاغ </option>


</select>
    
</div>
) }



<div className="action_div mt-3">

<label htmlFor="name" className="label_form"> اسم مستلم الحالة \ المريض \ ناقل الرفض \ المبلغ    <span className="star_required">*</span> </label>
<input type="text" id='name' placeholder='اسم مستلم الحالة' value={reciverName} onChange={(e) => setReciverName(e.target.value) } className="input_form" />
    
</div>

<div className="action_div">

<label htmlFor="name" className="label_form"> الملاحظات   </label>
<input type="text" id='name' placeholder='الملاحظات' value={notes} onChange={(e) => setNotes(e.target.value) } className="input_form height_form" />
    
</div>


<button className="mt-3 btn back_btn w-100" onClick={ () => setNext() }  > التالي </button>


    </div>
  )
}

export default ActionTaken