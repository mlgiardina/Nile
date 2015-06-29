var Signup = React.createClass({
    render: function () {
        return (
            <section className='signup-form'>
                <form name='signup' action='/users' method='post'>
                    <ul>
                        <li> <label>Name</label> <input type='name' placeholder='Steve Jobs' required name="name"/> </li>
                        <li> <label>Email</label> <input type='email' placeholder='example@email.com' required name="email"/> </li>
                        <li> <label>Password</label> <input type='password' required name="password"/> </li>
                        <li> <label>Confirm Password</label> <input type='password' required name="password_confirmation"/> </li>
                        <button type='submit' className='btn btn-default'>Sign Up</button>
                    </ul>
                </form>
            </section>
        );
    }
});