package com.example.jobiggerserverjava.models;

import javax.persistence.*;

@Entity
@Table(name="reviews")
public class Review {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int reviewId;
  private int jobId;
  private String username;
  private String text;

  public Review() {
  }

  public Review(int reviewId, int jobId, String username, String text) {
    this.reviewId = reviewId;
    this.jobId = jobId;
    this.username = username;
    this.text = text;
  }

  public int getReviewId() {
    return reviewId;
  }

  public void setReviewId(int reviewId) {
    this.reviewId = reviewId;
  }

  public int getJobId() {
    return jobId;
  }

  public void setJobId(int jobId) {
    this.jobId = jobId;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }
}
