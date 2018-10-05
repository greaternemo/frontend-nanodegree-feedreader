/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        describe('Each feed', () => {
            /* DONE: Write a test that loops through each feed
             * in the allFeeds object and ensures it has a URL defined
             * and that the URL is not empty.
             */
            it('has a URL', () => {
                allFeeds.forEach(feed => {
                    /* I considered using 'toBeTruthy' here but I didn't
                     * want it to fail on a value of 0 because it's
                     * neither undefined nor empty, even it if's wrong.
                     */
                    expect(feed.url).toBeDefined();
                    expect(feed.url).not.toBe('');
                });
            });

            /* DONE: Write a test that loops through each feed
             * in the allFeeds object and ensures it has a name defined
             * and that the name is not empty.
             */
            it('has a name', () => {
                allFeeds.forEach(feed => {
                    /* I considered using 'toBeTruthy' here but I didn't
                     * want it to fail on a value of 0 because it's
                     * neither undefined nor empty, and 0 is a validname.
                     */
                    expect(feed.name).toBeDefined();
                    expect(feed.name).not.toBe('');
                });
            });

        });

    });


    /* DONE: Write a new test suite named "The menu" */
    describe('The Menu', () => {
        const pageBody = document.querySelector('body');
        const menuIcon = document.querySelector('.menu-icon-link');

        /* DONE: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', () => {
            // asdf
            expect(pageBody.classList.contains('menu-hidden')).toBe(true);

        });

        /* DONE: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('changes visibility when clicked', () => {
            /* I had a brief moment of crisis here about whether or not
             * it was okay to use the same click event multiple times.
             * My guess is that it's probably not best practice but it is
             * concise, so I went with it.
             */

            const aClick = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window,
            });

            menuIcon.dispatchEvent(aClick);
            expect(pageBody.classList.contains('menu-hidden')).toBe(false);
            menuIcon.dispatchEvent(aClick);
            expect(pageBody.classList.contains('menu-hidden')).toBe(true);
        });
    });

    /* DONE: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', () => {
        /* DONE: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(done => {
            loadFeed(0, () => {
                done();
            });
        });
        
        it('contains at least a single entry', done => {
            const pageFeed = document.querySelector('.feed');
            const firstEntry = document.querySelector('.entry-link');
            expect(pageFeed.hasChildNodes()).toBe(true);
            expect(firstEntry).toBeDefined();
            done();
        });
    });

    /* DONE: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', () => {    
        /* DONE: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let origFeedFirstLink,
            newFeedFirstLink;

        beforeAll(done => {
            loadFeed(0, () => {
                origFeedFirstLink = document.querySelector('.entry-link').href;
                console.log(origFeedFirstLink);
                done();
            });
        });
        
        beforeEach(done => {
            loadFeed(1, () => {
                newFeedFirstLink = document.querySelector('.entry-link').href;
                console.log(newFeedFirstLink);
                done();
            });
        });
        
        it('changes content when a new feed is loaded', done => {
            expect(origFeedFirstLink).not.toBe(newFeedFirstLink);
            done();
        });    
    });

}());