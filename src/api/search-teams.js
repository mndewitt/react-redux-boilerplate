import request from 'superagent';
import { SOCCER_API_KEY } from '../config';

export function searchEnglishTeams() {
    return new Promise((resolve, reject) => {
        request.get('http://api.football-data.org/v1/soccerseasons/398/teams')
            .set('X-Auth-Token', SOCCER_API_KEY)
            .end((err, resp) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(resp.body.teams);
                }
            });
    });
}
