import React, {
    useState,
    useEffect
} from 'react';

import sr from '../../utils/scrollReveal';
import db from "../../utils/firebase";
import "./contact.styles.css";

const Contact = props => {

    useEffect(() => {
        sr.reveal('.contact__information',{delay: 200})
        sr.reveal('.contact__input',{interval: 200}); 
    });

    const [message,setMessage] = useState({
        name: "",
        email: "",
        content: ""
    });

    const send = () => {
        db.collection("contacts").add({
            name: message.name,
            email: message.email,
            message: message.content,
            date: new Date()
        }).then( () => {
            // setAlert({
            //     open: true,
            //     message: "Message has been submitted!"
            // });
        }).catch( err => {
            // setAlert({
            //     open: true,
            //     message: err.message
            // });
        });

        setMessage({
            name: "",
            email: "",
            content: ""
        });
    }

    return (
      <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>
        <div className="contact__container bd-grid">
          <div>
            {/* <div className="contact__information">
                        <i className='bx bx-phone contact__icon'></i>
                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className="contact__subtitle">phone number</span>
                        </div>
                    </div> */}
            <div className="contact__information">
              <i className="bx bx-envelope contact__icon"></i>
              <div>
                <h3 className="contact__title">E-mail</h3>
                <span
                  className="contact__subtitle"
                  href="mailto:jame.towork@gmail.com"
                >
                  jame.towork@gmail.com
                </span>
              </div>
            </div>
          </div>
          {/* <form action="" className="contact__form">
            <input
              type="text"
              placeholder="Name"
              className="contact__input"
              value={message.name}
              onChange={(e) => setMessage({ ...message, name: e.target.value })}
            />
            <input
              type="mail"
              placeholder="Email"
              className="contact__input"
              value={message.email}
              onChange={(e) =>
                setMessage({ ...message, email: e.target.value })
              }
            />
            <textarea
              name=""
              id=""
              cols="0"
              rows="10"
              className="contact__input"
              value={message.content}
              onChange={(e) =>
                setMessage({ ...message, content: e.target.value })
              }
              placeholder=""
              
            ></textarea>
            <div className="contact__button__container">
              <a
                href="#contact"
                className="contact__button button"
                onClick={() => send()}
              >
                Send
              </a>
            </div>
          </form> */}
        </div>
      </section>
    );
}

export default Contact;