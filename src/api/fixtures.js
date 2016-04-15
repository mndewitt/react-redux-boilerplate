import request from 'superagent';
import { SOCCER_API_KEY } from '../config';

export function getFixtures(fixturesUrl) {
    return new Promise((resolve, reject) => {
        request.get(fixturesUrl)
            .set('X-Auth-Token', SOCCER_API_KEY)
            .end((err, resp) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(resp.body.fixtures);
                }
            });
    });
}