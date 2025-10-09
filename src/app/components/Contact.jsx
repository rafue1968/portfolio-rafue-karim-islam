export default function Contact(){
    return (
        <section className="contact-section">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-subtitle">I'd love to hear aout new opportunities, collaborations, or just to chat about tech!
                Feel free to send me a message below.
            </p>

            <form 
                className="contact-form"    
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("Message submitted.");
                }}
            >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="name" required></textarea>
                </div>

                <button type="submit" className="contact-button">Send Message</button>
            </form>

            <div className="contact-links">
                <a 
                href="https://www.linkedin.com/in/rafue-karim-islam-887a2b216"
                target="_blank"
                rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a 
                href="https://github.com/rafue1968"
                target="_blank"
                rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a href="mailto:rafue1968@gmail.com">Email Me</a>
            </div>
        </section>
    )
}