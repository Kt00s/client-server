package demo.model;

public class AppUser {

    public static final String TABLE_NAME = "App_User";
    public static final String ID_COLUMN = "User_Id";
    public static final String NAME_COLUMN = "User_Mame";
    public static final String PASSWORD_COLUMN = "Encryted_Paassword";
    public static final String CONFERENCE_ID = "Conference_Id";

    private Long userId;
    private String userName;
    private String encrytedPassword;
    private Long conferenceId;

    public AppUser() {

    }

    public AppUser(Long userId, String userName, String encrytedPassword, Long conferenceId) {
        this.userId = userId;
        this.userName = userName;
        this.encrytedPassword = encrytedPassword;
        this.conferenceId = conferenceId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEncrytedPassword() {
        return encrytedPassword;
    }

    public void setEncrytedPassword(String encrytedPassword) {
        this.encrytedPassword = encrytedPassword;
    }

    public Long getConferenceId() {
        return conferenceId;
    }

    public void setConferenceId(Long conferenceId) {
        this.conferenceId = conferenceId;
    }

    @Override
    public String toString() { return this.userName + "/" + this.encrytedPassword + this.conferenceId; }

}