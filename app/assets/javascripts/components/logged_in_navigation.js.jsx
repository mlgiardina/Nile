var LoggedInNavigation = React.createClass({
    render: function () {
        return (
            <nav>
                <Home url '/' />
                <Search />
                <Logout name='Logout' url '/logout/' />
            </nav>
        );
    }
});

var NavLink = React.createClass({
    render: function () {
        return (<span onClick={this.clicked} className='btn btn-default'>Nile</span>);
    },

    clicked: function () {
        window.location.href = this.props.url;
    }
});

var Search = React.createClass({
    render: function () {
        return (
            <div>
                <form class='form-search' >
                    <div class='input-append'>
                    <input type='text' class='span2 search-query' />
                        <button type='submit' class='btn'>
                            <i class='icon-search'></i>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
});

var Logout = React.createClass({
    render: function () {
        return (
            <span></span>
        );
    }
});