var App = React.createClass({
    getInitialState: function () {
        return {
            route: window.location.hash.substr(1)
        };
    },
    componentDidMount: function () {
        var self = this;
        
        window.addEventListener('hashchange', function () {
            self.setState({
                route: window.location.hash.substr(1)
            });
        }, false);
    },
    render: function () {
        var Child;
        
        switch (this.state.route) {
            case '/about': Child = AboutContainer; break;
            default: Child = CommentContainer;
        }
        
        return (
            <div id="main-container">
                <NavContainer />
                <Child />
            </div>
        );
    }
});

React.render(<App />, document.body);
