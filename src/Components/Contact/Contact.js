import React from 'react'
import cssClasses from './Contact.module.scss'

const Contact = ()=>
{
    return <div className={cssClasses.Container}>
        <div className={cssClasses.Header}></div>
        <div className={cssClasses.Content}>
              <h1>Phone&nbsp;&nbsp;&nbsp;&nbsp;:<span>+91 9650446110</span></h1>
              <h1>E-mail&nbsp;&nbsp;&nbsp;:<span>sourabh1202@gmail.com</span></h1>
              <h1>GitHub&nbsp;&nbsp;&nbsp;:<a href="https://github.com/sirbh/">github.com/sirbh</a></h1>
              <h1>Website&nbsp;&nbsp;:<a href="https://www.saurabhchauhan.in/">www.saurabhchauhan.in</a></h1>
        </div>
    </div>
}

export default Contact