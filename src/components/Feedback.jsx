'use strict';

const React = require('react');
const { sendEvent } = require('./utilities.js');

const Feedback = React.createClass({
  displayName: 'Feedback',

  feedback: function () {
    document.getElementById("thumbs-up").addEventListener('click', () => {
      console.log('yay'); // eslint-disable-line no-console
      sendEvent('thumbs-up', window.location.pathname);
    });
    document.getElementById("thumbs-down").addEventListener('click', () => {
      console.log('buu'); // eslint-disable-line no-console
      sendEvent('thumbs-down', window.location.pathname);
    });
  },

  render: function() {
    /* eslint-disable react/jsx-no-literals */
    return(
      <div className="center mw7 ph3 mb4 mb5-l">
        <div className="w-100 ba b--light-gray br2 ph3 pb1 flex-ns justify-between-ns items-center-ns">
          <p className="mt0 mb3 mb0-ns lh-copy pt2-ns">Tell us, was the content of this page helpful?</p>
          <p className="ma0">
            <a className="mr3 no-underline f3 lh-copy dib pt2"
                href="#!"
                id="thumbs-up"
            >👍
            </a>
            <a className="no-underline f3 lh-copy dib pt2"
                href="https://github.com/FirefoxUX/photon/issues/new?title=Feedback:%20&body=%23%23%23%20Expected%20Content%0A%0A%23%23%23%20Actual%20Content%0A%0A%23%23%23%20Affected%20Page%0A"
                id="thumbs-down"
            >👎
            </a>
          </p>
        </div>
      </div>)
    /* eslint-enable react/jsx-no-literals */
  }
});

module.exports = Feedback;
