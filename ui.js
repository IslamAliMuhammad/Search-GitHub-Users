class UI {
  constructor() {
    this.userProfile = document.getElementById('profile');
  }
  //Display user profile
  showUserProfile(userData) {
    this.userProfile.innerHTML = `
        <div class="card card-body mb-3">
          <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mb-2" src="${userData.avatar_url}">
              <a href="${userData.html_url}" target="_blank" class="btn btn-success btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
            <span class="badge badge-success">Followers: ${userData.followers}</span>
              <span class="badge badge-primary">Public Repos: ${userData.public_repos}</span>
              <span class="badge badge-secondary">Public Gists: ${userData.public_gists}</span>
              <span class="badge badge-info">Following: ${userData.following}</span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">Company: ${userData.company}</li>
                <li class="list-group-item">Website/Blog: ${userData.blog}</li>
                <li class="list-group-item">Location: ${userData.location}</li>
                <li class="list-group-item">Member Since: ${userData.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
      `;
  }

  //Display user repos
  showUserRepos(repos) {
    let output = '';

    repos.forEach(function (repo) {
      output += `
          <div class="card card-body mb-2">
            <div class="row">
              <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
              </div>
              <div class="col-md-6">
              <span class="badge badge-success">Forks: ${repo.forms_count}</span>
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              </div>
            </div>
          </div>
        `;
    });

    document.getElementById('repos').innerHTML = output;

  }
  //Clear user profile
  clearProfile() {
    this.userProfile.innerHTML = "";
  }


  //Show alert message
  showAlert(message, className) {
    this.clearAlert();

    //Create a div
    const div = document.createElement('div');

    //Add class name to the div
    div.className = className;

    //Add text node to the dive
    div.appendChild(document.createTextNode(message));

    //Get parent node and add div to it
    const container = document.querySelector('.searchContainer');

    //Get reference node and add dive before it
    const search = document.querySelector('.search');

    //Insert div node after container node and before search node
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}