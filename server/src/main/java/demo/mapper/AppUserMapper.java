package demo.mapper;
import demo.model.AppUser;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AppUserMapper implements RowMapper<AppUser> {
    private static final String COMMA = ", ";

    public static final String SQL_FIND_ALL = "SELECT * FROM " + AppUser.TABLE_NAME;
    public static final String SQL_FIND_BY_ID = SQL_FIND_ALL + " WHERE " + AppUser.ID_COLUMN + " = ?";
    public static final String SQL_FIND_BY_NAME = SQL_FIND_ALL + " WHERE " + AppUser.NAME_COLUMN + " = ?";
    public static final String SQL_INSERT = "INSERT INTO " + AppUser.TABLE_NAME + " (" + AppUser.NAME_COLUMN + ", " + AppUser.CONFERENCE_ID + ") VALUES (?, ?)";
    public static final String SQL_UPDATE = "UPDATE " + AppUser.TABLE_NAME + " SET " + AppUser.NAME_COLUMN + " = ?" + COMMA + AppUser.CONFERENCE_ID + " = ?" + " WHERE " + AppUser.ID_COLUMN + " = ?";
    public static final String SQL_DELETE = "DELETE FROM " + AppUser.TABLE_NAME + " WHERE " + AppUser.ID_COLUMN + " = ?";


    @Override
    public AppUser mapRow(ResultSet rs, int rowNum) throws SQLException {

        Long userId = rs.getLong("User_Id");
        String userName = rs.getString("User_Name");
        String encrytedPassword = rs.getString("Encryted_Password");
        Long conferenceId = rs.getLong("Conference_Id");

        return new AppUser(userId, userName, encrytedPassword, conferenceId);
    }

}