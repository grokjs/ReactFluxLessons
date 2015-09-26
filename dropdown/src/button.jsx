var React = require('react');

var Button = React.createClass({
    render: function () {
        return (
            <button className={"btn " + this.props.className} type="button" onClick={this.props.whenClicked}>
                {this.props.title}
                <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
            </button>
        );
    }
});

module.exports = Button;