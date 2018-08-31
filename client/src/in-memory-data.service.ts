import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const lectures = [
            { id: 11, name: 'lecture1', speaker: 'speaker1', expl:'here should be description1', other: 'other info1', confId: 2 },
            { id: 12, name: 'lecture2', speaker: 'speaker1', expl:'here should be description2', other: 'other info2', confId: 2 },
            { id: 13, name: 'lecture3', speaker: 'speaker2', expl:'here should be description3', other: 'other info3', confId: 1 },
            { id: 14, name: 'lecture4', speaker: 'speaker1', expl:'here should be description4', other: 'other info4', confId: 2},
            { id: 15, name: 'lecture5', speaker: 'speaker3', expl:'here should be description5', other: 'other info5', confId: 2},
            { id: 16, name: 'lecture6', speaker: 'speaker2', expl:'here should be description6', other: 'other info6', confId: 1},
            { id: 17, name: 'lecture7', speaker: 'speaker3', expl:'here should be description7', other: 'other info7', confId: 2 },
            { id: 18, name: 'lecture8', speaker: 'speaker1', expl:'here should be description8', other: 'other info8', confId: 2 },
            { id: 19, name: 'lecture9', speaker: 'speaker2', expl:'here should be description9', other: 'other info9', confId: 2 },
        ];
        const users = [
            { id: 1, userName: 'user1', userPassword: 'user1', userRole: 'admin', confId: 2 },
            { id: 2, userName: 'user2', userPassword: 'user3',userRole: 'user', confId: 2 },
            { id: 3, userNam: 'user3', userPassword: 'user3', userRole: 'admin', confId: 1 },

        ];
        return {lectures, users};
    }
}