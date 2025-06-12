Create database biblioteca;

Use biblioteca;

Create table
    genre (
        id int (10) auto_increment,
        genre varchar(20),
        PRIMARY KEY (id)
    );

Create table
    authors (
        id int (10) auto_increment,
        name varchar(50),
        surname varchar(50),
        PRIMARY KEY (id)
    );

Create table
    books (
        id int (10) auto_increment,
        title varchar(20),
        rating int (1),
        total_pages int (3),
        published_date date,
        genre_id int (10),
        authors_id int (10),
        PRIMARY KEY (id),
        FOREIGN KEY (genre_id) REFERENCES genre (id),
        FOREIGN KEY (authors_id) REFERENCES authors (id)
    );

Create table
    publisher (
        id int (10) auto_increment,
        name varchar(30),
        books_id int (10),
        PRIMARY KEY (id),
        FOREIGN KEY (books_id) REFERENCES books (id)
    );