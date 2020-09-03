import GameSavingLoader from '../gamesavingloader';
import { data } from '../reader';
import GameSaving from '../gamesaving';

const hitman = new GameSaving(JSON.parse(data));

test('test promise', (done) => {
    GameSavingLoader.load().then((result) => {
      expect(result).toEqual(hitman);
    }).catch((err) => err);
    done();
  });

  test('test promise', (done) => {
    GameSavingLoader.load().then((result) => {
      expect(result).toEqual(hitman);
    }).catch((err) => err);
    done();
  });
