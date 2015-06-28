var Product = React.createClass({
    render: function () {
        return (
            <div className="col-xs-3 product">
                <h3><a href={this.props.url}>{this.props.name}</a></h3>
                <p>
                    <img src={"http://placehold.it/100"} />
                    {this.props.description}
                    <AddToCart />
                    <div className='price'>${this.props.price}</div>
                </p>
            </div>
        );
    }
});