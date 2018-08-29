import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const lectures = [
            { id: 11, name: 'lecture1', speaker: 'speaker1', confId: 2 },
            { id: 12, name: 'lecture2', speaker: 'speaker1', confId: 2 },
            { id: 13, name: 'lecture3', speaker: 'speaker2',confId: 1 },
            { id: 14, name: 'lecture4', speaker: 'speaker1', confId: 2},
            { id: 15, name: 'lecture5', speaker: 'speaker3', confId: 2},
            { id: 16, name: 'lecture6', speaker: 'speaker2', confId: 3},
            { id: 17, name: 'lecture7', speaker: 'speaker3',confId: 2 },
            { id: 18, name: 'lecture8', speaker: 'speaker1',confId: 2 },
            { id: 19, name: 'lecture9', speaker: 'speaker2',confId: 3 },
        ];
        const users = [
            { id: 11, name: 'user1', speaker: 'speaker1', confId: 2 },
            { id: 12, name: 'user2', speaker: 'speaker1', confId: 2 },
            { id: 13, name: 'user3', speaker: 'speaker2',confId: 1 },
            { id: 14, name: 'lecture4', speaker: 'speaker1', confId: 2},
            { id: 15, name: 'lecture5', speaker: 'speaker3', confId: 2},
            { id: 16, name: 'lecture6', speaker: 'speaker2', confId: 3},
            { id: 17, name: 'lecture7', speaker: 'speaker3',confId: 2 },
            { id: 18, name: 'lecture8', speaker: 'speaker1',confId: 2 },
            { id: 19, name: 'lecture9', speaker: 'speaker2',confId: 3 },
        ];
        return {lectures, users};
    }
}