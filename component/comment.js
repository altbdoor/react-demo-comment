var fakeComments = [
    {author: 'Doug Eaton', timestamp: 1443502432085, comment: "Is there any cloud service that actually has a native filesystem ?"},
    {author: 'Cecil King', timestamp: 1443503432085, comment: "Dropbox and Google Drive can do that through a browser,\nno sync required."},
    {author: 'Doug Eaton', timestamp: 1443504432085, comment: "I'm looking for a native fs so I can open a file from the cloud using lets say photoshop and work directly there without wasting hdd space."},
    {author: 'Donald Isaacson', timestamp: 1443505432085, comment: "It's weird that no company has done it yet."},
    {author: 'Andrew Lea', timestamp: 1443506432085, comment: "No cloud service uses a native file system."}
    // {author: '', timestamp: 0, comment: ''}
];

var CommentContainer = React.createClass({
    getInitialState: function () {
        return {data: []};
    },
    componentDidMount: function () {
        // supposedly logic for ajax
        
        this.setState({data: fakeComments});
    },
    handleCommentSubmit: function (comment) {
        var comments = this.state.data;
        
        this.setState({
            data: comments.concat(comment)
        });
    },
    render: function () {
        return (
            <div id="comment-container" className="content-container">
                <div className="container">
                    <CommentList comments={this.state.data} />
                    <CommentForm onCommentSubmit={this.handleCommentSubmit} />
                </div>
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        var commentsArray = this.props.comments.map(function (item) {
            return (
                <CommentItem author={item.author}
                    timestamp={item.timestamp}
                    comment={item.comment} />
            );
        });
        
        return (
            <ul id="comment-list" className="list-unstyled">
                {commentsArray}
            </ul>
        );
    }
});

var CommentItem = React.createClass({
    render: function () {
        var date = new Date(this.props.timestamp),
            dateStr,
            author = this.props.author;
        
        if (author == '') {
            author = 'Anonymous';
        }
        
        function padZero (integer) {
            return (integer < 10 ? '0' : '') + integer;
        }
        
        dateStr = padZero(date.getDate()) + '/' + padZero(date.getMonth() + 1) +
            '/' + date.getFullYear() + ' ' + padZero(date.getHours()) + ':' +
            padZero(date.getMinutes());
        
        return (
            <li>
                <b>{author}</b>{' '}
                <small className="text-muted">{dateStr}</small>
                
                <div className="comment-list-comment">
                    {this.props.comment}
                </div>
            </li>
        );
    }
});

var CommentForm = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        
        var author = React.findDOMNode(this.refs.author),
            comment = React.findDOMNode(this.refs.comment),
            
            authorVal = author.value.trim(),
            commentVal = comment.value.trim();
        
        if (commentVal) {
            author.value = comment.value = '';
            
            this.props.onCommentSubmit({
                author: authorVal,
                comment: commentVal,
                timestamp: Date.now()
            });
        }
        
        return;
    },
    render: function () {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Name</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" ref="author" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Comment</label>
                    <div className="col-sm-9">
                        <textarea className="form-control" rows="2" ref="comment"></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-3 col-sm-offset-3">
                        <button type="submit" className="btn btn-primary btn-block">Post</button>
                    </div>
                </div>
            </form>
        );
    }
});
