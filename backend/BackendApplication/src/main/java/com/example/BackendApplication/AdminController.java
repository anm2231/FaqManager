package com.example.BackendApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/admin")
//@PreAuthorize("hasRole('ADMIN')")
@CrossOrigin(origins = "http://localhost:5173")// restrict to admins
public class AdminController {

    @Autowired
    private FaQRepo faqRepo;

    @GetMapping("/stats")
    public Map<String, Object> getStats() {
        Map<String, Object> stats = new HashMap<>();

        stats.put("totalFaqs", faqRepo.count());

        // Category count
        Map<String, Long> categoryCounts = faqRepo.findAll().stream()
                .collect(Collectors.groupingBy(FaQ::getCategory, Collectors.counting()));
        stats.put("categoryCounts", categoryCounts);

        // Tag count
        Map<String, Long> tagCounts = faqRepo.findAll().stream()
                .flatMap(faq -> faq.getTags().stream())
                .collect(Collectors.groupingBy(tag -> tag, Collectors.counting()));
        stats.put("tagCounts", tagCounts);

        return stats;
    }

    @Autowired
    private SearchLogService searchLogService;

    @GetMapping("/top-searches")
    public Map<String, Integer> getTopSearches() {
        return searchLogService.getTopSearches(10); // top 10
    }

    @Autowired
    private UserRepo userRepo;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }
}
