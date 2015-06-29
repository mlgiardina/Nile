var Product = React.createClass({
    getInitialState: function () {
        return {inCart: false};
    },

    render: function () {
        if(this.state.inCart === true) {
            return (
                <div className="col-xs-5 col-md-5 product">
                    <h3><a href={this.props.url}>{this.props.name}</a></h3>

                    <p>
                        <img src={this.props.image}/>

                        <div onClick={this.added} className='btn btn-default addButton in-cart'>Already In Cart</div>
                        <div className='price'>${this.props.price}</div>
                    </p>
                </div>
            );
        } else {
            return (
                <div className="col-xs-5 col-md-5 product">
                    <h3><a href={this.props.url}>{this.props.name}</a></h3>

                    <p>
                        <img src={this.props.image}/>

                        <div onClick={this.added} className='btn btn-default addButton'>Add To Cart</div>
                        <div className='price'>${this.props.price}</div>
                    </p>
                </div>
            );
        }
    },

    added: function () {
        console.log("clicked");
        $.post('/product_orders', {product_id: this.props.id, order_id: this.props.order_id, quantity: 1});
        this.setState({inCart: true});
    }
});