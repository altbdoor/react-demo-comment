var AboutContainer = React.createClass({
    render: function () {
        return (
            <div id="about-container" className="content-container">
                <div className="container">
                    <p>Just a demonstration of sorts with a comment system, to try out React.</p>
                    
                    <p>
                        It is a very, <i>very</i> basic comment system, with only simple author name and text and no backend code. No information whatsover is sent to anywhere.
                    </p>
                    
                    <p>
                        It is also using a very inefficient method of loading the components via XMLHttpRequest, before bundling it all together for Babel to parse. The React documentation specifically recommended <a href="https://facebook.github.io/react/docs/tooling-integration.html#productionizing-precompiled-jsx">precompiling the JSX files</a>.
                    </p>
                    
                    <p>Developed with:</p>
                    
                    <ul>
                        <li><a href="http://getbootstrap.com/">Bootstrap 3.3.5</a></li>
                        <li><a href="https://facebook.github.io/react/">React 0.13.3</a></li>
                        <li><a href="https://babeljs.io/">Babel Browser 5.8.25</a></li>
                    </ul>
                    
                    <p><a href="#/" className="btn btn-default">Return</a></p>
                </div>
            </div>
        );
    }
});
