#Project initialization

[start.spring.io](https://start.spring.io/)

##Dependencies

###H2 Database

Provides a fast in-memory database that supports JDBC API and R2DBC access, with a small (2mb) footprint. Supports embedded and server modes as well as a browser based console application.

###Spring Data JPA

Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate.

###Lombok

Java annotation library which helps to reduce boilerplate code.

###Rest Repositories

Exposing Spring Data repositories over REST via Spring Data REST.

###Spring Boot Actuator

Supports built in (or custom) endpoints that let you monitor and manage your application - such as application health, metrics, sessions, etc.

###Init database

[spring-boot-h2-database](https://www.baeldung.com/spring-boot-h2-database)

##Run application

[h2-console](http://localhost:8080/h2-console)

jdbc url: jdbc:h2:file:./data/demo

user: sa

password: <see application.properties>

Execute the sql commands in resource file h2_data.sql\

The database will be in the directory <install dir>/data/demo.*

#Init Rest

[spring-data-rest-intro](https://www.baeldung.com/spring-data-rest-intro)

Create java classes Books and BookRepository

##Run application

[Check rest interface](http://localhost:8080/)

[Get 10 books for page 2](http://localhost:8080/books?page=1&size=10)

[Get book 1](http://localhost:8080/books/1)

[get all books](http://localhost:8080/books)

[find book5](http://localhost:8080/books/search/findByName?name=Book5)

[find books where name contains 2 and order then on author desc](http://localhost:8080/books/search/findByNameContaining?namePart=2&sort=author,desc&page=0&size=12)

# Add Angular

ng new frontend in <springboot install dir>/..

npm install primeng --save

npm install primeicons --save

npm install @angular/cdk --save

Add primeicons.css to styles in angular.json

Build frontend with dataTable with fake book-service

# Link Frontend to Backend

##First reading all books

using url: http://localhost:8080/books

##Then reading only the required set of books

using url: http://localhost:8080/books?page=1&size=10

##Then reading only the required ordered set of books

using url: http://localhost:8080/books?page=1&size=10&sort=author
