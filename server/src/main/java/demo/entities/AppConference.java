package demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "App_Role", //
        uniqueConstraints = { //
                @UniqueConstraint(name = "APP_ROLE_UK", columnNames = "Role_Name") })
public class AppConference {

    @Id
    @GeneratedValue
    @Column(name = "Conference_Id", nullable = false)
    private Long conferenceId;

    @Column(name = "Conference_Describe", length = 30, nullable = false)
    private String conferenceDescribe;

    @Column(name = "Ivent", nullable = false)
    private Long ivent;

    public Long getConferenceId() {
        return conferenceId;
    }

    public void setConferenceId(Long roleId) {
        this.conferenceId = conferenceId;
    }

    public String getConferenceDescribe() {
        return conferenceDescribe;
    }

    public void setConferenceDescribe(String roleDescribe) {
        this.conferenceDescribe = conferenceDescribe;
    }

    public Long getIvent() {
        return ivent;
    }

    public void setIvent(Long ivent) {
        this.ivent = ivent;
    }
}