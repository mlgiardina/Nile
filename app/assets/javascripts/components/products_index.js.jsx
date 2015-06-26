'use strict';

var ProductsIndex = React.createClass({
    getInitialState: function () {
        return { page: 0, products: this.props.products };
    },
    render: function () {
        return (
            <div className='row'>
                <div className='col-sm-5 col-sm-offset-1'>
                    {this.renderProducts()}
                    <div onClick={this.prev} className='btn btn-default'>Prev Page</div>
                    <div onClick={this.next} className='btn btn-default'>Next Page</div>
                </div>
            </div>
        );
    },
    renderProducts () {
        var products = this.state.products;
        return products.map(function (product) {
            return <Product id={product.id} url={product.url} name={product.name} description={product.description} image={product.image} />;
        });
    },
    prev: function () {
        jQuery.getJSON('/products?page=' + (this.state.page - 1), function (data) {
            this.setState({products: data, page: this.state.page - 1 });
        }.bind(this))
    },
    next: function () {
        jQuery.getJSON('/products?page=' + (this.state.page + 1), function (data) {
            this.setState({products: data, page: this.state.page + 1});
        }.bind(this))
    }
});