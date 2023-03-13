import React , {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import {  db , doc , setDoc} from '../firebase';
import './ConfirmPage.css';


const ConfirmPage = ( {userAssignedId} ) => {


  const [name , setName ] = useState('');
  const [email , setEmail ] = useState('');
  const [phone , setPhone ] = useState('');

  const [error , setError] = useState('');
  const [success  ,setSuccess] = useState(false);

  const navigate = useNavigate();

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

  const signNewUser =  async (e) => {

    e.preventDefault();

    if (name === ''  ) {
      setError('يرجى ادخال اسمك الكامل')
      }

      if (email === ''  ) {
            setError('يرجى ادخال ايميلك')
      }

      if (phone === ''  ) {
            setError('يرجى ادخال رقم هاتفك')
      }
      setTimeout(() => {
        setError('');
      } , 2500  );

      if (name !== '' && email !== '' && phone !== '' ) {
           
        setError('');
      

        const user = await setDoc(doc(db, "users", makeid(20)), {
            userId: userAssignedId,
            name: name,
            phone: phone,
            email: email,

          });
          setSuccess(true);

          setTimeout(() => {
            setSuccess(false);
            return navigate('/');
          } , 1800  );

        }
  }

  return (
    <div className='section confirm_section' >
    <div className="mt-3"></div>

    {success && (
      <div className="popup_success_div" > 
    
    <img src="/images/icons/check.png" alt="" />
</div>
    )}


    <h1 className="section_headline text-center">نحتاج منك تعبي معلومات الاتصال ليصلك البكج</h1>
    {error && (
                        <>
                        <h1 className="my-1 error_headline"> {error} </h1>
                        </>
                    )}
            
            <form onSubmit={signNewUser}>

          
      <div className="form_section_div mt-2">
          
          <div className="action_div">
            <label htmlFor="" className="label_form">الاسم الكامل</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value) } placeholder='ادخل اسمك الكامل' className="input_form" />
          </div>
          
          <div className="action_div">
            <label htmlFor="" className="label_form"> الايميل </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value) } placeholder='youname@gmail.com' className="input_form" />
          </div>
          
          <div className="action_div">
            <label htmlFor="" className="label_form"> رقم الهاتف </label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value) } placeholder="051 234 5678" className="input_form" />
          </div>

          
        <input className="btn btn_order_package" value={'اطلب الان'} type="submit" /> 
     

      </div>
      </form>

    </div>
  )
}

export default ConfirmPage