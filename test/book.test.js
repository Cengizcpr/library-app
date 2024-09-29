import request from 'supertest';
import { expect } from 'chai';
import app from '../index.js';

describe('Books API TEST', function () {
    let token;

    before(async () => {
        const res = await request(app)
            .post('/users/')
            .send({
                email: 'copurcengizhan@gmail.com',
                password: '12345678',
                phone_number: '05530130692',
                name: "Cengizhan"
            });
        expect(res.status).to.equal(200);
    });

    beforeEach(async () => {
        const res = await request(app)
            .post('/users/login')
            .send({ email: 'copurcengizhan@gmail.com', password: '12345678' });

        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('token');

        token = res.body.token;
    });

    it('Kitap ekleme', async function () {
        const res = await request(app)
            .post('/books/')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'Kitap Adı',
                author: 'Yazar',
                barcode: '0003',
                year: 2024,
                book_type: 'Polisiye'
            });
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Book successfully.');
    });
    it('Kitap Puan verme', async function () {
        const res = await request(app)
            .post('/books/score')
            .set('Authorization', `Bearer ${token}`)
            .send({ bookId: '1', userId: '1', score: 5 });

        expect(res.status).to.equal(200);
    });
    it('Tüm kitap listesi', async function () {
        const res = await request(app)
            .get('/books');

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });
    it('Id göre kitap bulma', async function () {
        const res = await request(app)
            .get('/books/1');

        expect(res.status).to.equal(200);
    });
    it('Kitap güncelleme', async function () {
        const res = await request(app)
            .patch('/books/')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'Kitap Adı 1',
                author: 'Yazar',
                barcode: '0003',
                year: 2024,
                book_type: 'Polisiye'
            });
        expect(res.status).to.equal(200);
    });

    it('Kitap Silme', async function () {
        const res = await request(app)
            .delete('/books/1')
            .set('Authorization', `Bearer ${token}`)

        expect(res.status).to.equal(200);
    });
   
});
