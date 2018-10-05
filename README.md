# frontend-nanodegree-feedreader

This project contains a web-based application that reads RSS feeds. The implementation and design are very self-contained and minimal, so it should be almost as easy to install as it is to use.

## Why this Project?

The application was provided to me without tests, so I (greater_nemo) wrote the tests.

I also wrote this README to explain all this to you, my beloved reader. <3

## What did I learn?

Honestly, I learned that Jasmine can be downloaded and used as a self-contained entity, which makes application testing WAY easier than I assumed it would be at first.

## Dependencies

Many of the repo's dependencies are self-contained, some are fetched remotely, but none require any additional installation to get the app up and running.

Locally, this repo uses:
* ...the standalone installation of [Jasmine v2.1.2](http://jasmine.github.io/), which does not require node.js. The necessary files for Jasmine to function are all included in the ./jasmine/ directory.
* ...[normalize.css v3.0.2](http://git.io/normalize). Normalize is included as a standalone file at ./css/normalize.css.
* ...the Icomoon font for the hamburger icon on the menu. The font files are included in the ./fonts/ directory and are used via ./css/icomoon.css.

Remotely, this repo uses:
* ...the Roboto font from [Google Fonts](http://fonts.google.com). This font is used remotely via fonts.googleapis.com.
* ...[jQuery v2.1.1](https://jquery.com). The minified version of jQuery is used remotely via Google CDN.
* ...[Handlebars.js v2.0.0](http://handlebarsjs.com). The minified version of Handlebars.js is used remotely via jsDelivr.
* ...the [Google JS API loader](https://www.google.com/jsapi). This is used via the remote URL.

## Installation

First, use git to clone the repo to wherever you want to run the application from:
```
git clone git@github.com:greaternemo/frontend-nanodegree-feedreader.git
```
To run the application locally, you'll need to open index.html in a browser.

To load the application remotely via URL, simply visit the chosen URL where the project is hosted. The included .htaccess will point requests properly to index.html to load the page.
For example, hosting the app at feedreader.project and visiting that URL will redirect automatically to feedreader.project/index.html.

And that's it.

## Advanced Use

The application works by querying the desired RSS feeds on page load to populate the lists of links.

These feeds are stored in the allFeeds array at the top of ./js/app.js. To add additional feeds, you can simply add additional 'feed' objects to the array. The 'name' will be what is displayed in the menu to identify the feeds and the 'URL' is the endpoint the app will query when the page is loaded. If you're not interested in some of the default feeds, you can remove them by removing the respective 'feed' object in the allFeeds array.

## License

The contents of this repository are not intended for reuse and borrow heavily from the source repo they were forked from.