var Login = React.createClass({
    render: function () {
        return (
            <section className='login-form'>
                <form name="login" action="/login" method="post">
                    <ul>
                        <li> <label>Email</label> <input type='email' placeholder='you@email.com' name='email'/> </li>
                        <li><label>Password</label> <input type='password' name='password'/> </li>
                        <button type='submit' className='btn btn-default'>Log In</button>
                    </ul>
                </form>
            </section>
        );
    }
});