var Product = React.createClass({
    render: function () {
        return (
            <div>
                <h3><a href={this.props.url}>{this.props.name}</a></h3>
                <p>
                    <img src={"http://placehold.it/100"} />
                    {this.props.description}
                </p>
            </div>
        );
    }
});