package com.example.BackendApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookmarks")
public class BookmarkController {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private FaQRepo faqRepo;

    @PostMapping("/{faqId}")
    public ResponseEntity<?> bookmarkFaq(@PathVariable Integer faqId, Authentication auth) {
        User user = userRepo.findByUsername(auth.getName());
        FaQ faq = faqRepo.findById(faqId).orElse(null);
        if (faq == null) return ResponseEntity.notFound().build();

        user.getBookmarkedFaqs().add(faq);
        userRepo.save(user);
        return ResponseEntity.ok("Bookmarked");
    }

    @GetMapping
    public List<FaQ> getBookmarks(Authentication auth) {
        User user = userRepo.findByUsername(auth.getName());
        return user.getBookmarkedFaqs();
    }

    @DeleteMapping("/{faqId}")
    public ResponseEntity<?> removeBookmark(@PathVariable Integer faqId, Authentication auth) {
        User user = userRepo.findByUsername(auth.getName());
        user.getBookmarkedFaqs().removeIf(f -> f.getid().equals(faqId));
        userRepo.save(user);
        return ResponseEntity.ok("Removed from bookmarks");
    }
}

