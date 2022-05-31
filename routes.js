const { TambahBukuHandler, TampilkanBukuHandler, TampilkanIDBukuHandler, EditBukuHandler, DeleteBukuHandler, } = require('./handler');
const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: TambahBukuHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: TampilkanBukuHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: TampilkanIDBukuHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: EditBukuHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: DeleteBukuHandler,
    },
];

module.exports = routes;