import request from 'superagent';

export function searchGithub(searchTerm) {
    return new Promise((resolve, reject) => {
        request.get(`https://api.github.com/search/users?q=${searchTerm}`)
            .end((err, resp) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(resp.body.items);
                }
            });
    });
}
