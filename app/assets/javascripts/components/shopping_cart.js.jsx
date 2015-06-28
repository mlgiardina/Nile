var ShoppingCart = React.createClass({
    getInitialState: function () {
        return {cartItems: this.props.cartItems};
    },
    render: function () {
        return (<div className="shopping-cart">
            {this.renderCart()}
        </div>);
    },

    renderCart: function () {
        var cartItems = this.state.cartItems;
        return cartItems.map(function (item) {
            return <Product name={item.name} price={item.price} />;
        });
    }
});