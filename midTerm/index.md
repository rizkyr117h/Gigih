## Video API

### Mendapatkan Semua Video

- **Metode**: GET
- **Endpoint**: `/video`
- **Deskripsi**: Mendapatkan daftar semua video beserta informasi thumbnail URL.

#### Contoh Request


#### Respons Sukses

- **Status**: 200 OK
- **Body**: Array of objects, setiap objek berisi informasi video.

#### Respons Gagal

- **Status**: 500 Internal Server Error
- **Body**: Objek JSON dengan kunci "error" berisi pesan kesalahan.

## Product API

### Mendapatkan Produk Berdasarkan VideoID

- **Metode**: GET
- **Endpoint**: `/product/:videoID`
- **Deskripsi**: Mendapatkan daftar produk yang terkait dengan video tertentu berdasarkan VideoID.

#### Contoh Request


#### Respons Sukses

- **Status**: 200 OK
- **Body**: Array of objects, setiap objek berisi informasi video.

#### Respons Gagal

- **Status**: 500 Internal Server Error
- **Body**: Objek JSON dengan kunci "error" berisi pesan kesalahan.

## Product API

### Mendapatkan Produk Berdasarkan VideoID

- **Metode**: GET
- **Endpoint**: `/product/:videoID`
- **Deskripsi**: Mendapatkan daftar produk yang terkait dengan video tertentu berdasarkan VideoID.

#### Contoh Request


#### Respons Sukses

- **Status**: 200 OK
- **Body**: Array of objects, setiap objek berisi informasi video.

#### Respons Gagal

- **Status**: 500 Internal Server Error
- **Body**: Objek JSON dengan kunci "error" berisi pesan kesalahan.

## Product API

### Mendapatkan Produk Berdasarkan VideoID

- **Metode**: GET
- **Endpoint**: `/product/:videoID`
- **Deskripsi**: Mendapatkan daftar produk yang terkait dengan video tertentu berdasarkan VideoID.




#### Respons Sukses

- **Status**: 200 OK
- **Body**: Objek JSON dengan kunci "success" bernilai true.

#### Respons Gagal

- **Status**: 400 Bad Request
- **Body**: Objek JSON dengan kunci "error" berisi pesan kesalahan terkait permintaan yang tidak valid.
