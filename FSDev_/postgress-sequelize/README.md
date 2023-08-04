# langkah-langkah pembuatan API

1. `npm init -y`
    untuk membuat package.json -> package.json berfungsi untuk menyimpan informasi package/modul dalam applikasi kita.
    NPM = Node Package Manager

2. `npm install <package_name>`
    untuk menginstall modul dari npm
    npm install express nodemon pg sequelize

3. membuat file_app.js_dan_.gitignore
   _.gitignore_ berfungsi untuk tidak memasukan *node_modules* ke dalam github repository

4. membuat _routing dan controllers__

5. npx nodemon app.js -> untuk menjalankan

# langkah - langkah konfigurasi set up postgres menggunakan sequelize

# sebelum itu harus melakukan install sequelize-cli terlebih dahulu 
> `npm i sequelize-cli` -> untuk melakukan instalasi "Command Line Interface" dari sequelize

> abis itu baru menjalankan langkah2 dibawah ini
1. `npx sequelize-cli init`
    untuk membuat initiation awal sequelize

# sebelum konfigurasi database dalam json HARUS membuat dulu database pada apps dbeaver 
    1. buka applikasi dbeaver
    2. klik button "colokan" pada bagian kiri atas 
    3. pilih postgreSQL (yang gambar gajah)
    4. pada 'tab' main -> silahkan masukan "username" & "password"
    5. pindah ke 'tab' PostgreSQL ceklist pada Show all databases
    6. klik finish 
# pada saat awal install, harus melakukan install "all package"

2. konfigurasi database di dalam _config.json_
> pada bagian `development` | harap melakukan  
    > `Username` = `postgres`, -> nama database yang tadi dibuat (postgres nama default)
    > `Password` = `admin`, -> sesuaikan password
    > `database` = `belajar_pg_sequelize`,
    > `host` = `127.0.0.1`, -> default
    > `dialect` = `postgres`

3. `npx sequelize-cli model:generate --nameTodo --attributes task:string,status:string`
   `npx sequelize-cli model:generate --nameUser --attributes username:string,email:string,password:string,image:string`
    NOTES : PERHATIKAN SPASI !!!!
    untuk membuat class dan juga migrations

4. `npx sequelize-cli db:create` -> untuk membuat database lewat sequelize tanpa query manual

5. `npx sequelize-cli db:migrate`
    untuk melakukan migrations agar table dibuat

6. 

   