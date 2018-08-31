package demo.dao;

import demo.mapper.AppLectureMapper;
import demo.model.AppLecture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;
import java.util.List;

@Repository
@Transactional
public class AppLectureDAO extends JdbcDaoSupport {

    @Autowired
    public AppLectureDAO(DataSource dataSource){ this.setDataSource(dataSource); }

    public List<AppLecture> findLectureAccounts (Long userId){

        String sql = AppLectureMapper.SQL_FIND_BY_USER_ID;
        Object[] params = new Object[] { userId };
        try {
        List<AppLecture> meetups = this.getJdbcTemplate().queryForList(sql, params, AppLecture.class);
        return meetups;
    } catch (EmptyResultDataAccessException e) {
        return null;
    }
    catch (NullPointerException e) {
            return null;
        }
    }

    public void addLecture (String lectureName, String lectureExpl, Long confId){
        String sql = AppLectureMapper.SQL_INSERT;
        this.getJdbcTemplate().update(sql, lectureName, lectureExpl, confId);
    }
}
