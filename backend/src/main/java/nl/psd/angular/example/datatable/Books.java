package nl.psd.angular.example.datatable;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;

@ToString
@Entity
@Data
public class Books {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private String author;
    private Long price;
}
