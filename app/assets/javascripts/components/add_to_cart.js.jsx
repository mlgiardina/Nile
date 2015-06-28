var AddToCart = React.createClass({
    render: function () {
        return (
            <div onClick={this.added} className="btn btn-default addButton">Add To Cart</div>
        );
    },
    added: function (event) {
        event.preventDefault();
        $('.addButton').closest('.product').addClass("in-cart");
    }
});