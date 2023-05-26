import Team from '../app';

describe('class Team.add() /.toThrow()', () => {
  test('add', () => {
    const baraka = new Team('Baraka');
    const cassieCage = new Team('Cassie Cage');
    const liuKang = new Team('Liu Kang');

    baraka.add('Baraka');
    cassieCage.add('Cassie Cage');
    liuKang.add('Kang');
    expect(baraka.members.has('Baraka')).toEqual(true);
    expect(cassieCage.members.has('Cassie Cage')).toEqual(true);
    expect(liuKang.members.has('Kang')).toEqual(true);
    expect(() => {
      liuKang.add('Kang');
    }).toThrow();
  });
});

describe('addAll', () => {
  test('addAll()', () => {
    const baraka = new Team('Baraka');
    const cassieCage = new Team('Cassie Cage');
    const liuKang = new Team('Liu Kang');

    baraka.addAll('Baraka', 'Noob-Saibot', 'Scorpion', 'Noob-Saibot');
    cassieCage.addAll('Cassie Cage', 'Noob-Saibot', 'Scorpion', 'Noob-Saibot', 'Scorpion');
    liuKang.addAll('Kang', 'Noob-Saibot', 'Scorpion', 'Scorpion', 'Scorpion', 'Scorpion', 'Scorpion');

    expect(baraka.members.size).toEqual(3);
    expect(cassieCage.members.size).toEqual(3);
    expect(liuKang.members.size).toEqual(3);
  });
});

describe('Team arr', () => {
  test('array', () => {
    const baraka = new Team('Baraka');
    const cassieCage = new Team('Cassie Cage');
    const liuKang = new Team('Liu Kang');

    baraka.addAll('Baraka', 'Noob-Saibot', 'Scorpion', 'Noob-Saibot');
    cassieCage.addAll('Cassie Cage', 'Noob-Saibot', 'Scorpion', 'Noob-Saibot', 'Scorpion');
    liuKang.addAll('Kang', 'Noob-Saibot', 'Scorpion', 'Scorpion', 'Scorpion', 'Scorpion', 'Scorpion');

    expect(baraka.toArray()).toEqual(['Baraka', 'Noob-Saibot', 'Scorpion']);
    expect(cassieCage.toArray()).toEqual(['Cassie Cage', 'Noob-Saibot', 'Scorpion']);
    expect(liuKang.toArray()).toEqual(['Kang', 'Noob-Saibot', 'Scorpion']);
  });
});
