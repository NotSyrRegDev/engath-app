import React , {useState} from 'react';
import ChatbotComponent from '../components/Chatbot'

const Chatbot = () => {

    const [previewChatbot ,  setPreviewChatbot] = useState(false);
    const [startChatbot ,  setStartChatbot] = useState(false);

  return (
    <>

    {startChatbot ? (
        <>
            <ChatbotComponent />
        </>
    ) : (
        <div className='main_get_started ' >
    <img src="/images/icons/chatbot.png" alt="" />

 
  <button className="btn engath_btn" onClick={() => setStartChatbot(!startChatbot) } > بدء الاستخدام </button>
 
   
</div>
    )}

    </>

  )
}

export default Chatbot