var React = require('react');
var ThumbnailList = require('./thumbnailList');

var options = {
    thumbnailData: [
        {
            title: "Show Courses",
            number: 12,
            header: "Learn React",
            description: "React is a fantastic new library for making fast, dynamic pages. React is a fantastic new library for making fast, dynamic pages.",
            imageUrl: "http://formatjs.io/img/react.svg"
        },
        {
            title: "Show Courses",
            number: 25,
            header: "Learn Gulp",
            description: "Gulp will speed up your development workflow. Gulp will speed up your development workflow.",
            imageUrl: "http://brunch.io/images/others/gulp.png"
        }
    ]
};

// React, please render this class
var element = React.createElement(ThumbnailList, options);

// React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.target'));