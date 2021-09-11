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

using url: http://localhost:8080/books/search/findByNameContaining?namePart=2&sort=author,desc&page=0&size=12

## Moving commit between repos

Export from repo

```
git format-patch --output-directory "../patches" FIRST_COMMIT_SHA1~..LAST_COMMIT_SHA1
// One commit only: git format-patch --output-directory .. -1 commit_sha
// last three commits: git format-patch --output-directory ".." -3
```
Import into repo

```
git am 0001-Example-Patch-File.patch
git am *.patch
```

####After rebuilding the git repo, build the backend using command:

```
mvn package -DskipTests
```

Start the backend application using command:

```
java -jar target/backend-0.0.1-SNAPSHOT.jar --skip
```

Enter data into the database as described in [Run application](#run-application)

To check data is correctly accessable by the application, stop the application and start is again without the --skip argument.

```
java -jar target/backend-0.0.1-SNAPSHOT.jar
```

After the application has started it should list all books in the table (30 records)

####After rebuilding the git repo, build the frontend using command:

```
npm install
```

Run the frontend using command:

```
npm start
```

In the UI the pagination works, sorting an column works and filtering works partially on the 'Name' column

#Package Angular inside the Springboot jar.

Updated the pom files to place angular files in src/main/resources/public/

###Start application

Build the application and run command:

```
java -jar backend/target/backend-0.0.1-SNAPSHOT.jar
```

Open browser to url: http://localhost:8080/

# Adding Liquibase to backend

[Use Liquibase to Safely Evolve Your Database Schema](https://www.baeldung.com/liquibase-refactor-schema-of-java-app)


