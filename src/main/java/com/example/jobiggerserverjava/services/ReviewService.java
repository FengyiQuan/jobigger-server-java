package com.example.jobiggerserverjava.services;

import com.example.jobiggerserverjava.models.Review;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ReviewService {
  private List<Review> reviews = new ArrayList<>();

  {
    reviews.add(new Review(1, 1570743716, "chen", "nice job1"));
    reviews.add(new Review(11, 1570743716, "chen", "nice job2"));
    reviews.add(new Review(111, 1570743716, "chen", "nice job3"));
    reviews.add(new Review(1111, 1570743716, "chen", "nice jo4"));

    reviews.add(new Review(2, 1566644149, "chen", "good job"));
    reviews.add(new Review(3, 1570751045, "chen", "bad job"));
    reviews.add(new Review(4, 1570747834, "quan", "amazing job"));
    reviews.add(new Review(5, 1570755980, "quan", "trash job"));
  }

  public List<Review> findReviewByJob(int jid) {
    List<Review> res = new ArrayList<>();
    for (Review r : reviews) {
      if (r.getJobId() == jid) {
        res.add(r);
      }
    }
    return res;
  }

  public List<Review> findReviewByUsername(String username) {
    List<Review> res = new ArrayList<>();
    for (Review r : reviews) {
      if (r.getUsername().equals(username)) {
        res.add(r);
      }
    }
    return res;
  }

  public Review findReviewById(int rid) {
    for (Review r : reviews) {
      if (r.getReviewId() == rid) {
        return r;
      }
    }
    return null;
  }

  public List<Review> findAllReview() {
    return reviews;
  }

  public int deleteReview(int rid) {
    for (Review p : reviews) {
      if (p.getReviewId() == rid) {
        reviews.remove(p);
        return 1;
      }
    }
    return 0;
  }


  public Review createReview(int jid, Review newReview) {
    newReview.setJobId(jid);
    reviews.add(newReview);
    return newReview;
  }

  public int updateReview(int rid, Review updatedReview) {

    for (Review r : this.reviews) {
      if (r.getReviewId() == rid) {
        updatedReview.setReviewId(rid);
        this.reviews.set(this.reviews.indexOf(r), updatedReview);
        return 1;
      }
    }
    return 0;
  }
}
