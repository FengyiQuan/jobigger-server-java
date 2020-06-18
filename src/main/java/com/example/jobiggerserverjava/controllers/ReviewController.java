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

  @PutMapping("/api/jobs/{jid}/reviews/{username}")
  public Review updateReview(
      @PathVariable int jid,
      @PathVariable String username,
      @RequestBody Review newReview) {
    return reviewService.updateReview(jid, username, newReview);
  }


  @PostMapping("/api/jobs/{jid}/reviews/{username}")
  public Review createReview(
      @PathVariable int jid,
      @PathVariable String username,
      @RequestBody Review newReview) {
    return reviewService.createReview(jid, username, newReview);
  }

  @GetMapping("/api/jobs/{jid}/reviews")
  public List<Review> findReviewByJob(@PathVariable("jid") Integer jid) {
    return reviewService.findReviewByJobId(jid);
  }

  @GetMapping("/api/reviews/{username}")
  public List<Review> findReviewByUsername(@PathVariable("username") String username) {
    return reviewService.findReviewByUsername(username);
  }

  @DeleteMapping("/api/jobs/{jid}/reviews/{username}")
  public List<Review> deleteReview(
      @PathVariable int jid,
      @PathVariable String username) {
    return reviewService.deleteReview(jid, username);
  }


//
//  @GetMapping("/api/profiles/{username}/reviews")
//  public List<Review> findReviewByUsername(
//          @PathVariable("username") String username) {
//    return reviewService.findReviewByUsername(username);
//  }
//
//  @GetMapping("/api/reviews/{rid}")
//  public Review findReviewById(@PathVariable("rid") Integer rid) {
//    return reviewService.findReviewById(rid);
//  }
//
//  @GetMapping("/api/reviews/")
//  public List<Review> findAllReview() {
//    return reviewService.findAllReview();
//  }
//
//  @DeleteMapping("/api/reviews/{rid}")
//  public Integer deleteReview(
//          @PathVariable("rid") Integer rid) {
//    return reviewService.deleteReview(rid);
//  }
}
