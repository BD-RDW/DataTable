package nl.psd.angular.example.datatable;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DatatableApplication {

	public static void main(String[] args) {
		SpringApplication.run(DatatableApplication.class, args);
	}

	@Bean
	public CommandLineRunner run(BookRepository bookRepository) throws Exception {

		return (String[] args) -> {
			bookRepository.findAll().forEach(book -> System.out.println(book));
		};
	}

}
