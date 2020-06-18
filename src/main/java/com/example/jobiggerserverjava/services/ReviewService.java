package com.example.jobiggerserverjava.services;

import com.example.jobiggerserverjava.models.Profile;
import com.example.jobiggerserverjava.models.Review;
import com.example.jobiggerserverjava.models.Job;

import com.example.jobiggerserverjava.repositories.JobRepository;
import com.example.jobiggerserverjava.repositories.ProfileRepository;
import com.example.jobiggerserverjava.repositories.ReviewRepository;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
  private List<Review> reviews = new ArrayList<>();


  @Autowired
  ReviewRepository repository;
  @Autowired
  ProfileRepository profileRepository;

  @Autowired
  JobRepository jobRepository;



  public Review createReview(Integer jid, String username, Review newReview) {
    //TODO: CHECK IF THE USER EXISTS
    Profile p = profileRepository.findUserById(username);
    newReview.setProfile(p);
    Job j = jobRepository.findJobById(jid);
    if (j == null) {
      j = jobRepository.save(new Job(jid, null));
    }
    newReview.setJob(j);
    return repository.save(newReview);
  }

  public List<Review> findReviewByJobId(Integer jobId) {
    return repository.findReviewByJobId(jobId);
  }

  public List<Review> deleteReview(int jid, String username) {
    Review toDelete = repository.findReviewByJobIdAndUsername(jid, username);
    repository.deleteById(toDelete.getReviewId());
    List<Review> result = new ArrayList<>();
    return result;
  }

  public Review updateReview(int jid, String username, Review newReview) {
    Review toUpdate = repository.findReviewByJobIdAndUsername(jid, username);
    toUpdate.setText(newReview.getText());
    return repository.save(toUpdate);
  }

  public List<Review> findReviewByUsername(String username) {
    return repository.findReviewByUsername(username);
  }

//  public List<Review> findReviewByJob(int jid) {
//    List<Review> res = new ArrayList<>();
//    for (Review r : reviews) {
//      if (r.getJobId() == jid) {
//        res.add(r);
//      }
//    }
//    return res;
//  }
//
//  public List<Review> findReviewByUsername(String username) {
//    List<Review> res = new ArrayList<>();
//    for (Review r : reviews) {
//      if (r.getUsername().equals(username)) {
//        res.add(r);
//      }
//    }
//    return res;
//  }
//
//  public Review findReviewById(int rid) {
//    for (Review r : reviews) {
//      if (r.getReviewId() == rid) {
//        return r;
//      }
//    }
//    return null;
//  }
//
//  public List<Review> findAllReview() {
//    return reviews;
//  }
//
//  public int deleteReview(int rid) {
//    for (Review p : reviews) {
//      if (p.getReviewId() == rid) {
//        reviews.remove(p);
//        return 1;
//      }
//    }
//    return 0;
//  }
//
//

//
//  public int updateReview(int rid, Review updatedReview) {
//
//    for (Review r : this.reviews) {
//      if (r.getReviewId() == rid) {
//        updatedReview.setReviewId(rid);
//        this.reviews.set(this.reviews.indexOf(r), updatedReview);
//        return 1;
//      }
//    }
//    return 0;
//  }
}
