package com.example.jobiggerserverjava.controllers;

import com.example.jobiggerserverjava.models.Review;
import com.example.jobiggerserverjava.services.ReviewService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class ReviewController {
  @Autowired
  private ReviewService reviewService;

  @PutMapping("/api/reviews/{rid}")
  public int updateReview(
          @PathVariable("rid") Integer rid,
          @RequestBody Review updatedReview) {
    return reviewService.updateReview(rid, updatedReview);
  }

//  @PostMapping("/api/widgets")
//  public Widget createStandaloneWidget(
//          @RequestBody Widget newWidget) {
//    return widgetService.createWidget(newWidget);
//  }

  @PostMapping("/api/jobs/{jid}reviews/")
  public Review createReview(
          @PathVariable int jid,
          @RequestBody Review newReview) {
    return reviewService.createReview(jid, newReview);
  }

  @GetMapping("/api/jobs/{jid}/reviews")
  public List<Review> findReviewByJob(@PathVariable("jid") Integer jid) {
    return reviewService.findReviewByJob(jid);
  }

  @GetMapping("/api/profiles/{username}/reviews")
  public List<Review> findReviewByUsername(
          @PathVariable("username") String username) {
    return reviewService.findReviewByUsername(username);
  }

  @GetMapping("/api/reviews/{rid}")
  public Review findReviewById(@PathVariable("rid") Integer rid) {
    return reviewService.findReviewById(rid);
  }

  @GetMapping("/api/reviews/")
  public List<Review> findAllReview() {
    return reviewService.findAllReview();
  }

  @DeleteMapping("/api/reviews/{rid}")
  public Integer deleteReview(
          @PathVariable("rid") Integer rid) {
    return reviewService.deleteReview(rid);
  }
}
