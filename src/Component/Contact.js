import React from "react";

const Contact = () =>{
    return (
        <div className="contact my-4" style={{ textAlign : 'center'}}>
       <h2>Contact</h2>
       <div className="contact my-4">
            <div className="row">
              <form>
                <div className="form-field my-2">
                <label for="name ms-2">Name </label>
                <input type="text" placeholder="Enter your name" />
                </div>
                <div className="form-field my-2">
                <label for="email">Email </label>
                <input type="email" placeholder="Enter your email adress" />
                </div>
                <div className="form-field my-2">
                <label for="mobile">Mobile </label>
                <input type="text" placeholder="Enter your mobile number" />
                </div>
                <div className="form-field my-2">
                <label for="password">Password</label>
                <input type="text" placeholder="Enter your password" />
                </div>
                <button class="btn btn-primary my-2">send</button>
              </form>
            </div>
       </div>
        </div>
    )
}

export default Contact;