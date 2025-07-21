package com.example.BackendApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.Authentication;
import java.time.LocalDateTime;
import java.util.List;


@RestController
@RequestMapping("/FaQ")
@CrossOrigin(origins = "http://localhost:5173")
public class FaQController {

      //to use object/instance of some other class here we need autowired annotation
      @Autowired
      private FaQRepo x;

      @PreAuthorize("hasRole('ADMIN')")
      @PostMapping
public ResponseEntity<String> addfaq(@RequestBody FaQ faq,Authentication auth){
          faq.setCreatedBy(auth.getName());
          faq.setCreatedAt(LocalDateTime.now());
          faq.setUpdatedAt(LocalDateTime.now());
          x.save(faq);
          return ResponseEntity.ok("Faq Saved");
      }

    @PutMapping("/{id}") //for editing any existing faq
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Object> updateFaq(@PathVariable Integer id, @RequestBody FaQ updatedFaQ) {
        var faqOptional = x.findById(id);
        if (faqOptional.isPresent()) {
            FaQ faq = faqOptional.get();
            faq.setTitle(updatedFaQ.getTitle());
            faq.setDescription(updatedFaQ.getDescription());
            faq.setCategory(updatedFaQ.getCategory());
            faq.setTags(updatedFaQ.getTags());
            faq.setUpdatedAt(LocalDateTime.now());
            faq.setQuestion(updatedFaQ.getQuestion());
            faq.setAnswer(updatedFaQ.getAnswer());

            x.save(faq);
            return ResponseEntity.ok(faq);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("FAQ not found");
        }
    }


    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteFaq(@PathVariable Integer id){
          if(x.existsById(id)){
              x.deleteById(id);
              return  ResponseEntity.ok("FaQ deleted");
          }
          else{
              return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Faq not found");
          }
    }

    @GetMapping("/{id}")     //to retrieve any faq by id
    public ResponseEntity<Object> getFaqById(@PathVariable Integer id) {
        var faqOptional = x.findById(id);
        if (faqOptional.isPresent()) {
            return ResponseEntity.ok(faqOptional.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("FAQ not found");
        }
    }

    @GetMapping("/all")  //working
    public List<FaQ> allfaq(){   // this is to return all the faqs on the faq page
        return x.findAll();
    }

    @GetMapping("/Filter")
    public ResponseEntity<?> filterFaqs(@RequestParam(required = false) String category,@RequestParam(required = false) String tag){
          if(category!=null){
              return ResponseEntity.ok(x.findByCategoryIgnoreCase(category));
          }
          if(tag!=null){
              return ResponseEntity.ok(x.findByTagsIgnoreCase(tag));
          }
          return ResponseEntity.badRequest().body("Please provide a category or a tag");
    }
    @Autowired
    private SearchLogService searchLogService;

    @GetMapping("/search")
    public ResponseEntity<?> searchFaqs(@RequestParam("q") String query) {
        searchLogService.logSearch(query); //  Log the search
        List<FaQ> results = x.findByQuestionContainingIgnoreCase(query);
        return ResponseEntity.ok(results);
    }

}










