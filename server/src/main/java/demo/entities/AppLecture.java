package demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "App_Lecture", //
        uniqueConstraints = { //
                @UniqueConstraint(name = "APP_LECTURE_UK", columnNames = "Conference_Id") })
public class AppLecture {
    public AppLecture() {
    }

    public AppLecture(String lectureName, String lectureDescribe, Long conferenceId) {
        this.lectureName = lectureName;
        this.lectureDescribe = lectureDescribe;
        this.conferenceId = conferenceId;
    }

    @Id
    @GeneratedValue
    @Column(name = "Lecture_Id", nullable = false)
    private Long lectureId;

    @Column(name = "Lecture_Name", length = 30, nullable = false)
    private String lectureName;

    @Column(name = "Lecture_Describe", length = 30, nullable = false)
    private String lectureDescribe;

    //@ManyToOne(fetch = FetchType.LAZY)
    @Column(name = "Conference_Id", nullable = false)
    private Long conferenceId;

    public Long getLectureId() {
        return lectureId;
    }

    public void setLectureId(Long lectureId) {
        this.lectureId = lectureId;
    }

    public String getLectureName() {
        return lectureName;
    }

    public void setLectureName(String lectureName) {
        this.lectureName = lectureName;
    }

    public String getLectureDescribe() {
        return lectureDescribe;
    }

    public void setLectureeDescribe(String lectureDescribe) {
        this.lectureDescribe = lectureDescribe;
    }

    public Long getConferenceId() {
        return conferenceId;
    }

    public void setConferenceId(Long conferenceId) {
        this.conferenceId = conferenceId;
    }
}