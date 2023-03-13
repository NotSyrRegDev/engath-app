import React, { useState } from 'react';
import './Signup.css';
import {   db , setDoc , doc ,  createUserWithEmailAndPassword , auth } from '../firebase';
import { Link, Navigate } from 'react-router-dom';

const Signup = () => {

    const [signUpAsLeader , setSignUpAsLeader ] = useState(false);
    
    const [signUpAsMember , setSignUpAsMember ] = useState(false);

    
  const [ userName , setUserName ] = useState('');
  const [teamId , setTeamId ] = useState('');
  const [teamNumber , setTeamNumber ] = useState('');
  const [userEmail , setUserEmail ] = useState('');
  const [userPassword , setUserPassword ] = useState('');

  const [loading , setLoading ] = useState(false);
  const [success , setSuccess ] = useState(false);

  const [error , setError ] = useState('');

  const makeid = (length) =>  {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


    const determineSignup = ( param ) => {

        switch(param) {
            
            case 'leader':
                setSignUpAsLeader(true);
                setSignUpAsMember(false);
                break;

            case 'member':
                setSignUpAsLeader(false);
                setSignUpAsMember(true);
                break;

        }

    }

    const signUpLeader = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        if (userName === ''  ) {
          setError(' يرجى ادخال اسم المستخدم ');
    }
    
    if (teamId === ''  ) {
      setError(' يرجى ادخال رمز الفريق ');
    }
    
    
    if (teamNumber === ''  ) {
      setError(' يرجى ادخال عدد أعضاء الفريق ');
    }
    
    if (userEmail === ''  ) {
      setError(' يرجى ادخال ايميل المستخدم ');
    }
    
    if (userPassword === ''  ) {
      setError(' يرجى ادخال باسوورد المستخدم ');
    }
    
    setTimeout(() => {
      setLoading(false);
      setError('');
    } , 5500)
    
        if (userName !== '' && teamId !== '' && teamNumber !== '' && userEmail !== '' && userPassword !== '' ) {
    
            const paramedics = await setDoc(doc(db, "paramedics", makeid(20)), {
    
              name: userName,
              team_id: teamId,
              email: userEmail,
              role: 'team_leader',
              is_admin: 0,
              
             
              });
            const teams = await setDoc(doc(db, "teams", makeid(20)), {
    
              team_leader: userName,
              team_id: teamId,
              team_number: teamNumber,       
             
              });
    
              createUserWithEmailAndPassword(auth, userEmail, userPassword)
              .then(() => {
              
            
                const objectUser = {
                    userName,
                    userEmail,
                    teamId,
                    role: 'team_leader'
                }
               
                    localStorage.setItem("engath_user",JSON.stringify(objectUser));

                setLoading(false);
                 
              })
              .catch(() => {
                 
                 
                  setError('خطأ في انشاء المستخدم');
                 
              });
    
            
                setSuccess(true);
                setLoading(false);
                setError('');
    
                setTimeout(() => {
                    setSuccess('');
                  
                    window.location.reload();
                } , 1350);
    
             
    
        }
    }

    const signUpMember = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        if (userName === ''  ) {
          setError(' يرجى ادخال اسم المستخدم ');
    }
    
    if (teamId === ''  ) {
      setError(' يرجى ادخال رمز الفريق ');
    }
    
  
    
    if (userEmail === ''  ) {
      setError(' يرجى ادخال ايميل المستخدم ');
    }
    
    if (userPassword === ''  ) {
      setError(' يرجى ادخال باسوورد المستخدم ');
    }
    
    setTimeout(() => {
      setLoading(false);
      setError('');
    } , 5500)
    
        if (userName !== '' && teamId !== '' && userEmail !== '' && userPassword !== '' ) {
    
            const paramedics = await setDoc(doc(db, "paramedics", makeid(20)), {
    
              name: userName,
              team_id: teamId,
              email: userEmail,
              role: 'team_member',
              is_admin: 0,
              
             
              });
          
    
              createUserWithEmailAndPassword(auth, userEmail, userPassword)
              .then(() => {
              
            
                const objectUser = {
                    userName,
                    userEmail,
                    teamId,
                    role: 'team_member'
                }
               
                    localStorage.setItem("engath_user",JSON.stringify(objectUser));

                setLoading(false);
                 
              })
              .catch(() => {
                 
                 
                  setError('خطأ في انشاء المستخدم');
                 
              });
    
            
                setSuccess(true);
                setLoading(false);
                setError('');
    
                setTimeout(() => {
                    setSuccess('');
                  
                    window.location.reload();
                } , 1350);
    
             
    
        }
    }

   

    const goBack = () => {
        setSignUpAsLeader(false);
        setSignUpAsMember(false);
    }

    const user = JSON.parse(localStorage.getItem("engath_user"));

  return (
    <div className='main_signup' >

    { user ? <Navigate to="/" replace /> : ''  }

    {signUpAsLeader == false && signUpAsMember == false  ? (
        <div className='main_signup_center' >
        <h1 className="section_headline">  تسجيل مستخدم جديد ك ؟ </h1>

<div className="login_options">
    <button className="btn engath_btn" onClick={() => determineSignup('leader') } > قائد الفرقة </button>
    <button className="btn engath_btn" onClick={() => determineSignup('member') } > عضو في الفرقة </button>
</div>
        </div>
    )  : ''}
       

        {signUpAsLeader && (
            <div className="form_main_div mt-5">

        <div className="d-flex-c f-sp f-wrap">
        <h1 className="section_headline_sm">  التسجيل كقائد للفرقة </h1>
        <button className="btn back_btn" onClick={() => goBack() } >العودة</button>
        </div>

        {error && (
                            <>
                            <h1 className="my-1 error_headline"> {error} </h1>
                            </>
                        )}

                {success && (
                    <>
                        <div className="popup_success">
                            <img src="/images/icons/check.png" alt="" />
                        </div>
                    </>
                )}

<form onSubmit={signUpLeader} className="my-3" >


<div className="action_div">

<label htmlFor="name" className="label_form">اسم قائد الفريق  <span className="star_required">*</span> </label>
<input type="text" id='name' placeholder='ادخل الاسم الخاص بك' value={userName} onChange={(e) => setUserName(e.target.value) } className="input_form" />
    
</div>

<div className="action_div">

<label htmlFor="unique_id" className="label_form">رمز  الفريق  <span className="star_required">*</span> </label>
<input type="text" id='unique_id' value={teamId}  onChange={(e) => setTeamId(e.target.value) } placeholder='ادخل رمز فرقتك' className="input_form" />
    
</div>

<div className="action_div">

<label htmlFor="numbers" className="label_form">  عدد اعضاء الفريق   </label>

<select name="numbers" id="" value={teamNumber} className="input_form" onChange={(e) => {
        const selectedNumber = e.target.value;
        setTeamNumber(selectedNumber);
      }} >
    <option value="">  اختر عدد اعضاء الفريق </option>
    <option value="1">واحد</option>
    <option value="2">اثنان</option>
    <option value="3">ثلاثة</option>
    <option value="4">أربعة</option>
    <option value="5">خمسة</option>
    <option value="6">ستة</option>
</select>
    
</div>

    <div className="action_div">

    <label htmlFor="email" className="label_form">الايميل  <span className="star_required">*</span> </label>
    <input type="email" id='email' value={userEmail}  onChange={(e) => setUserEmail(e.target.value) } placeholder='ادخل الايميل الخاص بك' className="input_form" />
        
    </div>

    <div className="action_div">

    <label htmlFor="password" className="label_form">كلمة المرور  <span className="star_required">*</span> </label>
    <input type="password" value={userPassword}  onChange={(e) => setUserPassword(e.target.value) } id='password' placeholder='ادخل كلمة المرور الخاصة بك' className="input_form" />
        
    </div>

    <p className="mt-2 section_headline_sm"> لديك حساب بالفعل ؟ قم <Link className='a_link a_underline' to="/login" >بتسجيل الدخول</Link> </p>

    {loading ? (
                        <>
                            <img src="/images/icons/loading-spinner.gif" className='loading_spinner' alt="" />
                        </>
                    ) : (
                        <>
                        <button type='submit' className="my-3 w-100 text-center btn engath_btn">تسجيل المستخدم</button>
                        </>
                    )}
             
</form>



</div>
        )}

        {signUpAsMember && (
            <div className="form_main_div mt-5">

            <div className="d-flex-c f-sp f-wrap">
        <h1 className="section_headline_sm">  التسجيل كعضو في الفرقة </h1>
        <button className="btn back_btn" onClick={() => goBack() } >العودة</button>
        </div>

<form onSubmit={signUpMember} >


<div className="action_div">

<label htmlFor="name" className="label_form" > الاسم الكامل <span className="star_required">*</span> </label>
<input type="text" value={userName} onChange={(e) => setUserName(e.target.value) } id='name' placeholder='ادخل الاسم الخاص بك' className="input_form" />
    
</div>

<div className="action_div">

<label htmlFor="unique_id" className="label_form">رمز  الفريق  <span className="star_required">*</span> </label>
<input type="text" id='unique_id' value={teamId}  onChange={(e) => setTeamId(e.target.value) } placeholder='ادخل رمز فرقتك' className="input_form" />
    
</div>

    <div className="action_div">

    <label htmlFor="email" className="label_form">الايميل  <span className="star_required">*</span> </label>
    <input type="email" id='email' value={userEmail}  onChange={(e) => setUserEmail(e.target.value) } placeholder='ادخل الايميل الخاص بك' className="input_form" />
        
    </div>

    <div className="action_div">

    <label htmlFor="password" className="label_form">كلمة المرور  <span className="star_required">*</span> </label>
    <input type="password" value={userPassword}  onChange={(e) => setUserPassword(e.target.value) } id='password' placeholder='ادخل كلمة المرور الخاصة بك' className="input_form" />
        
    </div>

    
    {loading ? (
                        <>
                            <img src="/images/icons/loading-spinner.gif" className='loading_spinner text-center' alt="" />
                        </>
                    ) : (
                        <>
                        <button type='submit' className="my-3 w-100 text-center btn engath_btn">تسجيل المستخدم</button>
                        </>
                    )}

  
    <div className="mb-3"></div>
</form>

</div>
        )}

         
        

    </div>
  )
}

export default Signup