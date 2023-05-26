import ErrorRepository from '../map';


describe('ErrorRepository', () => {
    test('ErrorRepository', () => {
        const request = new ErrorRepository();

      expect(request.translate(301)).toEqual("Мы переехали, не ищи нас");
      expect(request.translate(302)).toEqual("Как ты нас нашел?");
      expect(request.translate(403)).toEqual("Тебе тут не место");
      expect(request.translate(503)).toEqual("СисАдмин пьет чай,ладно не чай");
      expect(request.translate(53)).toEqual('Unknown error');
    });
  });