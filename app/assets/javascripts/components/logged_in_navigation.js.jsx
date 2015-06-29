var LoggedInNavigation = React.createClass({
    render: function () {
        return (
            <nav>
                 <Home url='/' />
                 <Search />
                 <Cart url='/product_orders' />
                 <Orders url='/orders' />
                 <Logout url='/logout/' />
            </nav>
        );
    }
});

var Home = React.createClass({
    render: function () {
        return (<h2 onClick={this.clicked} className='logo'>Nile</h2>);
    },

    clicked: function () {
        window.location.href = this.props.url;
    }
});

var Search = React.createClass({
    render: function () {
        return (
            <span>
                <form className='form-search' >
                    <span className='input-append'>
                    <input type='text' className='span2 search-query' />
                        <button type='submit' className='btn btn-default'>Search</button>
                    </span>
                </form>
            </span>
        );
    }
});

var Logout = React.createClass({
    render: function () {
        return (
            <span onClick={this.clicked} className='btn btn-default logout'>Logout</span>
        );
    },

    clicked: function () {
        window.location.href = this.props.url;
    }
});

var Cart = React.createClass({
    render: function () {
        return (
            <span onClick={this.clicked} className = 'btn btn-default'>Cart</span>
        );
    },

    clicked: function () {
        window.location.href= this.props.url;
    }
});

var Orders = React.createClass({
    render: function () {
        return (
            <span onClick={this.clicked} className = 'btn btn-default'>Orders</span>
        );
    },
    clicked: function () {
        window.location.href= this.props.url;
    }
});