const timeToRead = require('eleventy-plugin-time-to-read');

module.exports = config => {
    config.addCollection('blog', collection => {
        return [...collection.getFilteredByGlob('./src/blog/*.md')].reverse();
    });

    const postcssFilter = require('./src/filters/postcssFilter.js');

    config.addNunjucksAsyncFilter('postcss', postcssFilter);
    config.addWatchTarget('styles/**/*.css');

    const dateFilter = require('./src/filters/dateFilter.js');

    config.addFilter('dateFilter', dateFilter);
    config.addPlugin(timeToRead);

    config.addFilter("excerpt", (post) => {
        const content = post.replace(/(<([^>]+)>)/gi, "");
        return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
    });

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        dir: {
            input: 'src',
            output: 'dist'
        }
    };
}
