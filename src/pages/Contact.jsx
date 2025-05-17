export const Contact = () => {


    // the function below gives us the input data from the form .
    const handleFormSubmit = (formData) =>{
        // console.log(formData.entries);
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData)    
    }
    return (
        <>
            <section className="section-contact">
                <h2 className="container-title">Contact Us</h2>

                <div className="contact-wrapper container">
                    <form action={handleFormSubmit} >
                        <input
                            type="text"
                            required
                            autoComplete="false"
                            placeholder="Enter Your Name"
                            name="username"
                        />
                        <input
                            type="email"
                            required
                            autoComplete="false"
                            placeholder="Enter Your Email"
                            name="email"
                        />
                        <textarea
                            name="message"
                            rows="10"
                            placeholder="Enter Your Message"
                            required
                            autoComplete="false"

                        ></textarea>
                        <button type="submit" value="Send">Send</button>
                    </form>
                </div>



            </section>
        </>
    )
}

