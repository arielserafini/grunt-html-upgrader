var cheerio = require('cheerio'),
    upgraders = [
      'bootstrap2-3',
      'fontAwesome3-4'
    ];

module.exports = {
  run: function(input, type, grunt) {
    if (upgraders.indexOf(type) === -1) {
      grunt.log.warn(type + ' upgrader not valid.');

      return false;
    }

    //input.replace(/<%((.|\s)*?)%>/g, function(match, subMatch){ return "<!-- <%"+subMatch+"%> -->" });
    var ejsCache = [];
    input = input.replace(/<%(.*?)%>/g, function (match) {
      ejsCache.push(match);
      return 'cachedejsstart' + (ejsCache.length-1) + 'cachedejsend';
    });
    

    var $ = cheerio.load(input);
    var results = [];
    var rules = require('./upgraders/' + type + '.js');
    var rule;

    for (var i = 0; i < rules.length; i++) {
      rule = rules[i];
      try {
        results.push(rule.run($));
      } catch(e) {
        grunt.log.warn('Error processing the ruleset with title "' + rule.title + '"');
      }
    }

    var html = $.html();

    //html.replace(/<!-- <%((.|\s)*?)%> -->/g, (match, subMatch){ return "<%"+subMatch+"%>"});
    html = html.replace(/cachedejsstart(\d*)cachedejsend/g,function (match, num) {
      return ejsCache[parseInt(num)];
    });

    html = html.replace(/&apos;/g, "'"); // ' fix
    html = html.replace(/&amp;&amp;/g, "&&"); // && fix
    html = html.replace(/&gt;/g, ">"); // > fix
    html = html.replace(/&lt;/g, "<"); // < fix


    return html;
  }
};
