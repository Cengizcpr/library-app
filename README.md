# Library APP (Postman koleksiyonunu proje içerisinde bulabilirsiniz.)

Proje için .env dosyasını ekleyin ve düzenleyin.
* DB_HOST = localhost
* DB_USER = username
* DB_PASS = password
* DB_NAME = database
* JWT_SECRET = example

## Proje Tanımı

Bu proje, kullanıcıların kitap ekleyip yönetebileceği basit bir API sağlar. Kullanıcılar, sisteme kaydolabilir, giriş yapabilir ve kitap ekleme,puanlama işlemlerini gerçekleştirebilirler.

## Teknoloji Yığını

- **Node.js**: Sunucu tarafı uygulaması için seçildi.
- **Express.js**: RESTful API geliştirmek için kullanıldı. 
- **PostgreSQL**: Veritabanı olarak seçildi. 
- **Chai & Mocha**: Test süreci için kullanıldı. 
- **Supertest**: API testleri için kullanıldı. 

## Mimari Kararlar

1. **RESTful API**: API, REST mimarisi kullanılarak oluşturuldu, bu sayede istemci ve sunucu arasındaki etkileşimler basit ve anlaşılır hale getirildi.
2. **JWT (JSON Web Token)**: Kullanıcı kimlik doğrulaması için kullanıldı. Bu sayede, kullanıcıların giriş yaptıktan sonra yetkilendirilmiş erişim sağlaması mümkün oldu.

### Projeyi Çalıştırmak için Adımlar

1. **Depoyu Klonlayın**:
    ```bash
    git clone https://github.com/Cengizcpr/library-app.git
    cd library-app
    ```

2. **Bağımlılıkları Yükleyin**:
    ```bash
    npm install
    ```

4. **Sunucuyu Başlatın**:
    ```bash
    npm start
    ```

5. **Testleri Çalıştırın**:
    ```bash
    npm test
    ```




