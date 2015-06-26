var ProductsIndex = React.createClass({
    getInitialState: function () {
        return {
            page: 0,
            products: this.props.products
        };
    },
    render: function () {
        return (
            <div>
                {this.renderProducts()}
                <div onClick={this.prev} className='btn btn-default'>Prev Page</div>
                <div onClick={this.next} className='btn btn-default'>Next Page</div>
            </div>
        );
    },

    renderProducts: function () {
        var products = this.state.products;
        return products.map(function (product) {
            return <Product id={product.id} url={product.url} name={product.name} description={product.description} />
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
    }
});