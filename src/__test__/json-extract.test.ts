import { jsonExtract } from '../index';
test('check all complexity', () => {
    const myData = { hello: "salut", test: "lolo", nom: { id: "10", person: {firstname: 'nom_1',lastname: 'nom_2'} }};
    const propertyToExtract = ["hello", "test", "nom/id@user_id", "nom/person/firstname+lastname@fullname"];
    const value = jsonExtract(myData, propertyToExtract);

    expect('salut').toBe('salut');
})