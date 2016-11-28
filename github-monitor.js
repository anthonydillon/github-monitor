let user = 'ubuntudesign'

const gh_api = {
    'repos': `https://api.github.com/users/${user}/repos`,
    'pulls': 'https://api.github.com/repos/ubuntudesign/{}/pulls'
}

fetch(gh_api.repos, {
	method: 'get'
}).then(function(response) {
  console.log(response.blob());
}).catch(function(err) {
	console.error('Whoops, there was an error');
});
