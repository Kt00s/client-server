package demo.model;

public class AppLecture {

    public static final String TABLE_NAME = "App_Lecture";
    public static final String ID_COLUMN = "Lecture_Id";
    public static final String NAME_COLUMN = "Lecture_Name";
    public static final String EXPLANE_COLUMN = "Lecture_Describe";
    public static final String CONFERENCE_ID = "Conference_Id";

    private Long lectureId;
    private String lectureName;
    private String lectureExpl;
    private Long conferenceId;

    public AppLecture() {

    }

    public AppLecture(Long lectureId, String lectureName, String lectureExpl, Long conferenceId) {
        this.lectureId = lectureId;
        this.lectureName = lectureName;
        this.lectureExpl = lectureExpl;
        this.conferenceId = conferenceId;
    }

    public Long getLectureId() {
        return lectureId;
    }

    public void setLectureId(Long userId) {
        this.lectureId = userId;
    }

    public String getLectureName() {
        return lectureName;
    }

    public void setLectureName(String userName) {
        this.lectureName = userName;
    }

    public String getLectureExpl() {
        return lectureExpl;
    }

    public void setLectureExpl(String encrytedPassword) {
        this.lectureExpl= encrytedPassword;
    }

    public Long getConferenceId() {
        return conferenceId;
    }

    public void setConferenceId(Long conferenceId) { this.conferenceId = conferenceId; }


    @Override
    public String toString() { return this.lectureName + "/" + this.lectureExpl + "/" + this.conferenceId; }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        AppLecture that = (AppLecture) obj;
        if (!lectureName.equals(that.lectureName) || lectureId != that.lectureId) return false;

        return true;
    }
}
