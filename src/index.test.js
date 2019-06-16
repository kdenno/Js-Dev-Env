// import the expect function from the assertion library
import {
    expect
} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'; // file system reader

// describe our test
describe('our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

// test index.html file
describe('index.html', () => {
    it('should say hello', (done) => {
        // reference the index.html file and hold it in memory
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        // define jsdom environment
        jsdom.env(index, function(err, window) {
            // this callback function is called after jsdom has created the virtual DOM  thats why we have access to the window object
            const h1 = window.getElementsByTagName('h1')[0];
            // now that we have access to our element, lets write our assertions
            expect(h1.innerHTML).to.equal('Hello World');
            done(); // report the tests now and get ready for the next test
            // close the window to free up the memory
            window.close();

        });

    });
});
