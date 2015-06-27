var LoggedOutNavigation = React.createClass({
    render: function () {
        return (
            <nav>
                <Home url='/' />
                <Search />
                <SignUp url='/signup' />
                <Login url='/login' />
            </nav>
        );
    }
});

var Login = React.createClass({
    render: function () {
        return (
            <span onClick={this.clicked} className='btn btn-default login'>Login</span>
        );
    },
    clicked: function () {
        window.location.href = this.props.url;
    }
});

var SignUp = React.createClass({
    render: function () {
        return (
            <span onClick={this.clicked} className='btn btn-default login'>Sign Up</span>
        );
    },
    clicked: function () {
        window.location.href = this.props.url;
    }
});