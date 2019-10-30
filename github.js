class GithubRequest {
    constructor() {
        this.client_id = 'Iv1.Iv1.0117c95d17bf9175';
        this.client_secret = 'eea49b8e00b8397890de2c6fff616e5d4033e9c4';

        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(userName) {
        const profileResponse = await fetch(`https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const userProfile = await profileResponse.json();
        const userRepos = await repoResponse.json();

        return {
            userProfile,
            userRepos
        };
    }
}