package demo.mapper;
import demo.model.AppLecture;
import demo.model.AppUser;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AppLectureMapper implements RowMapper<AppLecture> {
    private static final String COMMA = ", ";

    public static final String SQL_FIND_ALL = "SELECT * FROM " + AppLecture.TABLE_NAME;
    public static final String SQL_FIND_BY_USER_ID = SQL_FIND_ALL + ", Conferences" + " WHERE " + AppLecture.CONFERENCE_ID + " = " + AppUser.CONFERENCE_ID + " and " + AppUser.ID_COLUMN + " = ?";
    public static final String SQL_FIND_BY_NAME = SQL_FIND_ALL + " WHERE " + AppLecture.NAME_COLUMN + " = ?";
    public static final String SQL_INSERT = "INSERT INTO " + AppLecture.TABLE_NAME + " (" + AppLecture.NAME_COLUMN + ", " + AppLecture.EXPLANE_COLUMN + ", " + AppLecture.CONFERENCE_ID + ") VALUES (?, ?, ?)";
    public static final String SQL_UPDATE = "UPDATE " + AppLecture.TABLE_NAME + " SET " + AppLecture.NAME_COLUMN + " = ?" + COMMA + AppLecture.EXPLANE_COLUMN + " = ?" + COMMA + AppLecture.CONFERENCE_ID + " = ?" +" WHERE " + AppLecture.ID_COLUMN + " = ?";
    public static final String SQL_DELETE = "DELETE FROM " + AppLecture.TABLE_NAME + " WHERE " + AppLecture.ID_COLUMN + " = ?";


    @Override
    public AppLecture mapRow(ResultSet rs, int rowNum) throws SQLException {

        Long lectureId = rs.getLong("Lecture_Id");
        String lectureName = rs.getString("Lecture_Name");
        String lectureExpl = rs.getString("Lecture_Expl");
        Long conferenceId = rs.getLong("Conference_Id");

        return new AppLecture(lectureId, lectureName, lectureExpl, conferenceId);
    }

}
