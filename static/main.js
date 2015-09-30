var MainContainer = React.createClass({
    render: function () {
        return (
            <div id="main-container">
                <NavContainer />
                <CommentContainer />
            </div>
        );
    }
});

React.render(<MainContainer />, document.body);
