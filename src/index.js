
import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"
import fimage from "./img/mustafa.png"
import fb from "./img/fb.png"
import tik from "./img/tik.png"
import wh from "./img/whatsapp.png"
import insta from "./img/insta.png"
 




function Hi() {
  return <div>   
     
     <div className='header'>
<div className='up' > 
     <h1>  <b>Syed Muhammad Mustafa </b>  </h1>
<img className='mustafa-img' src={fimage} width={115}  height={105} alt =''/>
</div>

{/* <button  className="dot">

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>
</button>  */}
<div className='all-links'> 
 

<div className='fb'> 
<a className='link' href='https://www.facebook.com/syedmuhammad.mustafa.98'>
<img className='l-img' src={fb} width={20} height={20} alt=''/>

 mustafa.98
  </a>
 
</div>


<div className='in'>

<a className='link' href='https://www.instagram.com/bkmrcip2002/'>
<img className='l-img' src={insta} width={20} height={20} alt=''/>

   bkmrcip2002</a>
</div>
 
<div className='tik' >


<a className='link' href='https://www.tiktok.com/@rcip2002'>
<img className='l-img' src={tik} width={20} height={20} alt=''/>
 rcip2002
  </a>
 
</div>


<div className='wh'>


<a className='link' href=' https://web.whatsapp.com/'>
<img className='l-img' src={wh} width={20} height={20} alt=''/>
 whatsapp.com/

</a>
 
</div>





   </div>
<div className='profile'>   

<h2>MY PROFILE</h2>
<h3> Dedicated to producing top-notch work, I am a passionate web and app developer that is willing to learn and apply new technologies.
</h3>
</div>

</div>


             <div className='both'> 
             <div className='f-half'> 

<div className='contact'>

 <h2> CONTACT ME: </h2>

<h2> Mobile:   03328336028</h2>
<h2>Email: 
<a href='https://mail.google.com/mail/u/0/?ogbl#inbox'> zsyedmuhammadmustafa@gmail.com</a>
</h2>
<h2>Address:</h2>
  <p>    A 201 Block 12 Gulberg F.B Area , Karachi .   </p>
 
<h2>Instagram:
<a className='link' href='https://www.instagram.com/bkmrcip2002/'>https://www.instagram.com/bkmrcip2002/</a>

</h2>
<h2>Facebook:
<a className='link' href='https://www.facebook.com/syedmuhammad.mustafa.98'>https://www.facebook.com/syedmuhammad.mustafa.98</a>
</h2>
<h2>TikTok:

<a className='link' href=' https://www.tiktok.com/@rcip2002'> https://www.tiktok.com/@rcip2002</a>

</h2>




<h2>Linked-In:
<a className='link' href=' https://www.linkedin.com/in/mustafa-zaidi-4a3b84286/'> https://www.linkedin.com/in/mustafa-zaidi-4a3b84286/</a>
  
  
   </h2>
</div>


 
<div className='education'>
<h1>  EDUCATION
</h1>


    

 <h2 > 
    School:    <a href='https://usman.edu.pk/'> Usman Public School</a></h2>  
<h2>  
    College:
   <a href='https://www.facebook.com/govdehlicollege/'>
     Dehli Government College 
     </a>  
    </h2>
<h2>University:

<a href='https://www.ssuet.edu.pk/'> Sir Syed University</a>

</h2>


</div>



                        </div>

                        <div className='s-half'>


<div className='skills'>
<h1>  SKILLS
</h1>

<h2 >Html</h2>
<h2 >CSS</h2>
<h2 >Java-script</h2>
<h2 >ES-6</h2>
<h2 >Express</h2>
<h2 >React</h2>



</div>

<div className='courses'>
  <h1> 
COURSES
</h1>

 
 
  
     <h2>Web And Mobile Application Developer</h2>
      
      
<h2>Artificial Intelligence</h2>
 
 


</div>


</div>
</div>

</div> 



}
 


 



ReactDOM.render(<Hi/>, document.querySelector('#root'));
