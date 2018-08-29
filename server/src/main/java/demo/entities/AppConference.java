package demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "App_Conference", //
        uniqueConstraints = { //
                @UniqueConstraint(name = "Conference_UK", columnNames = { "User_Id", "Role_Id" }) })

public class AppConference {

    @Id
    @OneToMany(fetch = FetchType.LAZY)
    @GeneratedValue
    @Column(name = "Id", nullable = false)
    private Long id;

    private Long numOfVisitors;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getNumOfVisitors() {
        return numOfVisitors;
    }

    public void setNumOfVisitors(Long numOfVisitors) {
        this.numOfVisitors = numOfVisitors;
    }
}
