var fetch = require('node-fetch')

let user = 'ubuntudesign'
let auth = ' -u anthonydillon:Ringw00d'

const gh_api = {
    'repos': `https://api.github.com/users/${user}/repos`,
    'pulls': `https://api.github.com/repos`
}

function processRepos(repos) {
  console.log('Processing user repos...');
  for (var i in repos) {
    let repoName = repos[i].name
    console.log(repos[i])
    fetch(`${gh_api.pulls}/${repos[i].full_name}/pulls`)
      .then(function(response) {
        return response.json()
      })
      .then(function(res) {
        console.log(`Repo ${repoName} has ${res.length} pulls`)
      })
  }
}

function fetchRepos() {
  fetch(gh_api.repos)
    .then(function(response) {
      console.log('Fetching user repos...');
      return response.json()
    })
    .then(processRepos)
}

fetchRepos();
