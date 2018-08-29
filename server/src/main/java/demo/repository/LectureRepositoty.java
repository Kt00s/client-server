package demo.repository;

import demo.entities.AppLecture;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LectureRepositoty extends CrudRepository<AppLecture, Long> {

    List<AppLecture> findByConferenceId (Long id);
}
