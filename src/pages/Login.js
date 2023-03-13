import React , {useState} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword , auth ,  getDocs , collection , db , where , query } from '../firebase';
import './Login.css';


const Login = () => {

  let navigate = useNavigate();

  const [email , setEmail] = useState('');

  const [password , setPassword] = useState('');





  const [error , setError] = useState('');
  const [loading , setLoading] = useState(false);
  const [success , setSuccess ] = useState(false);

  


  const loginUser =  async (e) => {
      
    e.preventDefault();

    const q = query(collection(db, "paramedics"), where("email", "==", "as23d@gmail.com" ) );
   
    const querySnapshot = await getDocs(q);
  
    const paramedicsDataArray = querySnapshot.docs ? querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) : '';
   

   

    if (email === ''  ) {
        setError('يرجى ادخال ايميل المستخدم')
}

if (password === ''  ) {
        setError('يرجى ادخال كلمة مرور المستخدم')
}

    setLoading(true);
  

    if ( email !== '' && password !== '' && paramedicsDataArray.length !== 0 ) {
      signInWithEmailAndPassword(auth, email, password)
      .then(() => {
          
       
        
        const objectUser = {
          userName : paramedicsDataArray[0].name,
          userEmail : paramedicsDataArray[0].email,
          teamId : paramedicsDataArray[0].team_id,
          role: paramedicsDataArray[0].role
      }
         
  
              localStorage.setItem("engath_user",JSON.stringify(objectUser));
              setSuccess(true);
              setLoading(false);
  
              setTimeout(() => {
                setSuccess(false);
                navigate('/');
              } , 2500)
             
                
         
      }) .catch(() => {
    
       
          setError('فشل تسجيل الدخول يرجى التحقق من بياناتك');
             setLoading(false);
      });
    }

    
    


}


    const user = JSON.parse(localStorage.getItem("engath_user"));

  return (
    <div className='section main_login' >

{ user ? <Navigate to="/" replace /> : ''  }

        <h1 className="section_headline">  تسجيل الدخول  </h1>

        <div className="form_main_div">

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

        <form onSubmit={loginUser} >

            <div className="action_div">

            <label htmlFor="email" className="label_form">الايميل <span className="star_required">*</span> </label>
            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value) } placeholder='ادخل الايميل الخاص بك' className="input_form" />
                
            </div>

            <div className="action_div">

            <label htmlFor="password" className="label_form">كلمة المرور <span className="star_required">*</span> </label>
            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value) } placeholder='ادخل كلمة المرور الخاصة بك' className="input_form" />
                
            </div>

            <p className="mt-2 section_headline_sm "> ليس لديك حساب ؟ قم   <Link className='a_link a_underline' to="/signUp" >  بانشاء حساب الان </Link> </p>

            {loading ? (
                        <>
                            <img src="/images/icons/loading-spinner.gif" className='loading_spinner' alt="" />
                        </>
                    ) : (
                        <>
                        <button type='submit' className="mt-3 w-100 text-center btn engath_btn">تسجيل الدخول</button>
                        </>
                    )}
             

          

        </form>

        </div>
        

    </div>
  )
}

export default Login