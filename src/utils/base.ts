export default {
    apiBaseUrl : 'https://reqres.in/api',
    dataUserProperty:  ['id','first_name', 'last_name', 'email', 'avatar'],
    dataResourceProperty: ['id', 'name', 'pantone_value', 'color', 'year'],
    dataCreationProperty: ['id', 'name', 'job', 'createdAt'],
    dataProps: [{name: 'taofeek', job: 'tester', email: 'eve.holt@reqres.in', password: 'cityslicka'}, 
        {name: 'ismaheel', job: 'rapper', email: 'eve.steph@reqres.in', password: 'cityslicka'}],
    errorProps: {error: 'Missing password'}
}