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
        <div className="w-100 ba b--light-gray br2 pa3 flex-ns justify-between-ns items-center-ns">
          <p className="mt0 mb3 mb0-ns lh-copy pt1-ns">Tell us, was the content of this page helpful?</p>
          <p className="ma0">
            <a className="mr3 no-underline bg-green white font-smoothing br-100 dib tc w2 h2 pt1 lh-copy fw6"
                href="#!"
                id="thumbs-up"
            >+</a>
            <a className="no-underline bg-red white font-smoothing br-100 dib tc w2 h2 pt1 lh-copy fw6"
                href="https://github.com/FirefoxUX/photon/issues/new"
                id="thumbs-down"
            >–</a>
          </p>
        </div>
      </div>)
    /* eslint-enable react/jsx-no-literals */
  }
});

module.exports = Feedback;
