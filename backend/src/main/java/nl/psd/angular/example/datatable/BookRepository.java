package nl.psd.angular.example.datatable;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "books", path = "books")
public interface BookRepository  extends PagingAndSortingRepository<Books, Long> {
    List<Books> findByName(@Param("name") String name);
    List<Books> findByNameContaining(@Param("namePart") String namePart, Pageable pageable);

}
