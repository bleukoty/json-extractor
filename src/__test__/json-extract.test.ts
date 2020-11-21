import { jsonExtract } from '../index';
test('check all complexity', () => {
  const myData = {
    greeting: 'salut',
    test: 'lolo',
    nom: { id: '10', person: { firstname: 'nom_1', lastname: 'nom_2' } },
  };
  const propertyToExtract = ['greeting', 'test', 'nom/id@user_id', 'nom/person/firstname+lastname@fullname'];
  const value = jsonExtract(myData, propertyToExtract);

  expect(value).toEqual({ greeting: 'salut', test: 'lolo', user_id: '10', fullname: 'nom_1 nom_2' });
});
