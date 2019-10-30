const githubRequest = new GithubRequest();
const ui = new UI();
document.getElementById('searchUser').addEventListener('keyup', (e) => {
    const userName = e.target.value;
    if (userName !== '') {
        githubRequest.getUser(userName)
            .then(userObj => {
                if (userObj.userProfile.message === 'Not Found') {
                    //alert "User not found"
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    ui.showUserProfile(userObj.userProfile);
                    ui.showUserRepos(userObj.userRepos);
                }
            });
    } else {
        ui.clearProfile();
    }
});

