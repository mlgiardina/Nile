var LoggedOutNavigation = React.createClass({
    render: function () {
        return (
            <nav>
                <Home url='/' />
                <Search />
                <SignUpButton url='/users/new' />
                <LoginButton url='/login' />
            </nav>
        );
    }
});

var LoginButton = React.createClass({
    render: function () {
        return (
            <span onClick={this.clicked} className='btn btn-default login'>Login</span>
        );
    },
    clicked: function () {
        window.location.href = this.props.url;
    }
});

var SignUpButton = React.createClass({
    render: function () {
        return (
            <span onClick={this.clicked} className='btn btn-default login'>Sign Up</span>
        );
    },
    clicked: function () {
        window.location.href = this.props.url;
    }
});