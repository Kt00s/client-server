package demo.controllers;

import demo.dao.AppLectureDAO;
import demo.entities.AppLecture;
import demo.repository.LectureRepositoty;
import demo.utils.WebUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.List;


@Controller
public class MainController {

    @Autowired
    private LectureRepositoty lectureRepositoty;

    @RequestMapping(value = {"/", "/welcome"}, method = RequestMethod.GET)
    public String welcomePage(Model model) {
        model.addAttribute("title", "Welcome");
        model.addAttribute("message", "This is welcome page!");
        return "welcomePage";
    }

    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public String adminPage(Model model, Principal principal) {

        User loginedUser = (User) ((Authentication) principal).getPrincipal();

        String userInfo = WebUtils.toString(loginedUser);
        model.addAttribute("userInfo", userInfo);

        return "adminPage";
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String loginPage(Model model) {

        return "loginPage";
    }

    @RequestMapping(value = "/logoutSuccessful", method = RequestMethod.GET)
    public String logoutSuccessfulPage(Model model) {
        model.addAttribute("title", "Logout");
        return "logoutSuccessfulPage";
    }

    @RequestMapping(value = "/userInfo", method = RequestMethod.GET)
    public String userInfo(Model model, Principal principal) {

        // (1) (en)
        // After user login successfully.
        // (vi)
        // Sau khi user login thanh cong se co principal
        String userName = principal.getName();

        System.out.println("User Name: " + userName);

        User loginedUser = (User) ((Authentication) principal).getPrincipal();

        String userInfo = WebUtils.toString(loginedUser);
        model.addAttribute("userInfo", userInfo);


        return "userInfoPage";
    }

    @RequestMapping(value = "/403", method = RequestMethod.GET)
    public String accessDenied(Model model, Principal principal) {

        if (principal != null) {
            User loginedUser = (User) ((Authentication) principal).getPrincipal();

            String userInfo = WebUtils.toString(loginedUser);

            model.addAttribute("userInfo", userInfo);

            String message = "Hi " + principal.getName() //
                    + "<br> You do not have permission to access this page!";
            model.addAttribute("message", message);

        }
        return "403Page";
    }

    @ResponseBody
    @RequestMapping(value = "/lectures", method = {RequestMethod.GET, RequestMethod.POST})
    public String returnLectures(HttpServletRequest request, Model model) {
        Long userId = Long.getLong(request.getParameter("userId"));
        Iterable<AppLecture> lectures = lectureRepositoty.findByConferenceId(userId);
        model.addAttribute("lectures", lectures);
        return "adminPage";
    }

    @RequestMapping(value = "/addLecture", method = RequestMethod.POST)
    public String addLecture(HttpServletRequest reqest, Model model){
        AppLecture newLecture = new AppLecture();
        newLecture.setLectureName(reqest.getParameter("name"));
        newLecture.setLectureeDescribe(reqest.getParameter("expl"));
        newLecture.setConferenceId(Long.getLong(reqest.getParameter("confId")));
        lectureRepositoty.save(newLecture);
        Iterable<AppLecture> lectures = lectureRepositoty.findAll();
        model.addAttribute("lectures", lectures);
        return "adminPage";
    }

    /*@RequestMapping(value = "/addUser", method = RequestMethod.POST)
    public String addUser(HttpServletRequest reqest){
        Ap
        String lectureName = reqest.getParameter("name");
        String lectureExpl = reqest.getParameter("expl");
        Long conferenceId = Long.getLong(reqest.getParameter("confId"));
        new AppUserDAO(dataSource).addLecture(lectureName, lectureExpl, conferenceId);
        return "ok";
    }*/

}