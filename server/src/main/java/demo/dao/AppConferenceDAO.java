package demo.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;
import java.util.List;

@Repository
@Transactional
public class AppConferenceDAO extends JdbcDaoSupport {

    @Autowired
    public AppConferenceDAO(DataSource dataSource){ this.setDataSource(dataSource); }

    public List<String> findConferenceAccounts (Long userId){

        String sql = "Select conf.conference_describe " //
                + " from  app_conference conf, app_user us, " //
                + " where conf.Ivent = us.conference and us.User_Id = ? ";
        Object[] params = new Object[] { userId };
        try {
        List<String> meetups = this.getJdbcTemplate().queryForList(sql, params, String.class);
        return meetups;
    } catch (EmptyResultDataAccessException e) {
        return null;
    }
    }

}
