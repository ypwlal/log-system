var config = {
    server_path: '',
    repo_name: 'h5-events',
    branch: 'master',
    user: ''
}

var source_url = config['server_path'] + '/' + config['user'] + '/' + config['repo_name'] + '/' +  '/raw/' + config['branch'] + '/' + 
                '2017-spring-changlong/src/app.js';

module.exports = config;
