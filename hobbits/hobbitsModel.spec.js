const db = require('../data/dbConfig');
const Hobbits = require('./hobbitsModel');

describe('hobbits model', () => {
	beforeEach(async () => {
		await db('hobbits').truncate(); // truncate prevents items being added from being duplicated on save/refresh
	});
	describe('insert()', () => {
		it('should insert provided hobbit', async () => {
			await Hobbits.insert({ name: 'gaffer' });

			const hobbits = await db('hobbits');

			expect(hobbits).toHaveLength(1);
		});

		it('should insert provided hobbits', async () => {
			let hobbit = await Hobbits.insert({ name: 'gaffer' });
			expect(hobbit.name).toBe('gaffer');

			hobbit = await Hobbits.insert({ name: 'sam' });
			expect(hobbit.name).toBe('sam');

			const hobbits = await db('hobbits');

			expect(hobbits).toHaveLength(2);
		});
	});
});
