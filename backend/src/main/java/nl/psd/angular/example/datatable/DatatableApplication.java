package nl.psd.angular.example.datatable;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DatatableApplication {
	private static boolean checkDatabase = true;
	public static void main(String[] args) {
		if (args.length > 0) {
			if (args[0].equals("--skip")) {
				checkDatabase = false;
			}
		}
		System.out.println("Use '--skip' argument to skip checks");
		SpringApplication.run(DatatableApplication.class, args);
	}

	@Bean
	public CommandLineRunner run(BookRepository bookRepository) throws Exception {
		if (checkDatabase) {
			return (String[] args) -> {
				bookRepository.findAll().forEach(book -> System.out.println(book));
			};
		}
		return null;
	}
}
