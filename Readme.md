#Project PrimeNG DataTable LazyLoading

This project shows an Angular frontend with a PrimeNG dataTable. The dataTable uses pagination to show only part of the all the data, it uses lazy loading to fetch only those records from the springboot backend it needs.

It supports sorting and filtering is partially implemented.

The SpringBoot backend uses a H2 database that has his database in the data directory. The database is initialized and filled using Liquibase.

The data is retrieved using a PagingAndSortingRepository and exposed using a RepositoryRestResource.

The springboot application is servicing the Angular frontend.

A more detailed overview of the build is in [build steps](build_steps.md)

###Usage

1. Build the project (mvn package)
1. Run the executable springboot jar (cd backend; java -jar target/backend-0.0.1-SNAPSHOT.jar)
1. [Open browser](http://localhost:8080)