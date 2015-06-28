'use strict';

var ProductsIndex = React.createClass({
    getInitialState: function () {
        return { page: 0, products: this.props.products };
    },
    render: function () {
        return (
            <div>
                {this.navButtons()}
                <div className='row'>
                    {this.renderProducts()}
                    <ShoppingCart />
                </div>
                {this.navButtons()}
            </div>
        );
    },
    renderProducts () {
        var products = this.state.products;
        return products.map(function (product) {
            return <Product id={product.id} url={product.url} name={product.name} description={product.description} image={product.image} price={product.price} />;
        });
    },
    prev: function () {
        $.getJSON('/products?page=' + (this.state.page - 1), function (data) {
            this.setState({products: data, page: this.state.page - 1 });
        }.bind(this))
    },
    next: function () {
        $.getJSON('/products?page=' + (this.state.page + 1), function (data) {
            this.setState({products: data, page: this.state.page + 1});
        }.bind(this))
    },
    navButtons: function () {
        return (
            <div className='row-offset'>
                <div onClick={this.prev} className='btn btn-default'>Prev Page</div>
                <div onClick={this.next} className='btn btn-default'>Next Page</div>
            </div>
        );
    }
});