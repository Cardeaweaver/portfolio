import React from 'react';
import emailjs from 'emailjs-com';

const Portfolio = () => {


   const validErrors = {
       name: "you have to enter name",
       email: "that's not a valid email",
       message: "you have to enter message",
       phoneNumber: "that's not a valid phone number"
   }    

   const validationSchema = yup.object().shape({
       name: yup.string().required(validErrors.name),
       email: yup.string().email(validErrors.email).required(validErrors.email),
       message: yup.string().required(validErrors.messddage),
       phoneNumber: yup.string().required(validErrors.phoneNumber),
       subject: yup.string().required(validErrors.subject),
     
   })

   const validateEmail = (email) => {
       name: "you have to enter email"
       email: "that's not a valid email"
       phoneNumber: "that's not a valid phone number"
   }

//    const validationSchema = yup.object().shape({
// name: yup.string().required(validErrors.name),
// email: yup.string().email(validErrors.email).required(validErrors.email),
// message: yup.string().required(validErrors.message),
// phoneNumber: yup.string().required(validErrors.phoneNumber),

// });
    



    return (
        <div style={{ padding: '20px' }}>
            <header>
                <h1>Welcome to My Portfolio</h1>
                <p>Discover more about me, my skills, and my professional journey.</p>
            </header>

            <section className="container">
                <div className="about">
                    <h2>About Me</h2>
                    <p>Hello! I'm Carde'a Weaver, a passionate and dedicated Developer based in Cleveland, OH. With a love for creativity and innovation, I strive to bring fresh ideas and a unique perspective to everything I do.</p>
                    <img src="path/to/your/image/me.jpg" alt="Me" style={{ width: '100px', height: 'auto', float: 'left', marginRight: '20px' }} />
                    <p>I have been involved in the US Army National Guard as an Infantryman, working on various projects that have helped hone my technical skills and my ability to work under pressure. In my free time, I enjoy anything related to technology.</p>
                </div>

                <div className="skills">
                    <h2>My Skills</h2>
                    <ul>
                        <li>Web Development (HTML, CSS, JavaScript)</li>
                        <li>Computer 
                        Hardware Repair</li>
                    </ul>
                </div>

                <div className="experience">
                    <h2>Professional Experience</h2>
                    <h3>Junior Developer at BloomTech Institute</h3>
                    <p>April 2024 - Present</p>
                    <p>At BloomTech Institute, I learned from a team of expert developers in creating innovative web solutions for clients. My role involved holding myself to a high standard in the learning of web performance and user experiences with HTML, CSS, and JavaScript.</p>
                    <p>Coding included testing and debugging applications, as well as learning new technologies and tools under the mentorship of senior developers.</p>
                </div>

                <div className="contact">
                    <h2>Contact Me</h2>
                    <p>Email: <a href="mailto:cardeaweaver@gmail.com">cardeaweaver@gmail.com</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/your-linkedin-profile">Your LinkedIn Profile</a></p>
                    <p>Phone: 440-506-5264</p>
                    <button><a href="https://github.com/cardea">Click Here For My GitHub</a></button>

                    <div className="form-container" style={{ marginTop: '20px' }}>
                        <h3>Send Me a Message</h3>
                        <form onSubmit={sendEmail}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '100%' }} />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '100%' }} />

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '100%' }}></textarea>

                            <button type="submit" style={{ padding: '10px 15px' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            <footer>
                <div className="footer" style={{ marginTop: '20px' }}>
                    <p>Thank you for visiting my portfolio. Let's connect!</p>
                </div>
            </footer>
        </div>
    );
}

export default Portfolio;
