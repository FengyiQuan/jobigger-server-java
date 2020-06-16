package com.example.jobiggerserverjava.services;

import com.example.jobiggerserverjava.models.Review;

import java.util.ArrayList;
import java.util.List;

public class ReviewService {
  private List<Review> reviews = new ArrayList<>();

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


  public Review createReview( Review newReview) {
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
