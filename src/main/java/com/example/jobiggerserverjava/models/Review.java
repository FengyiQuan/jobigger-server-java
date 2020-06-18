package com.example.jobiggerserverjava.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;

@Entity
@Table(name="reviews")
public class Review {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int reviewId;

  @ManyToOne
  @JsonIgnore
  @PrimaryKeyJoinColumn(name = "jobId", referencedColumnName="ID")
  Job job;

  public int getReviewId() {
    return reviewId;
  }

  public void setReviewId(int reviewId) {
    this.reviewId = reviewId;
  }

  @ManyToOne
  @JsonIgnore
  @PrimaryKeyJoinColumn(name = "username", referencedColumnName="ID")
  Profile profile;

  private String text;

  public Review(Job job, Profile profile, String text) {
    this.job = job;
    this.profile = profile;
    this.text = text;
  }

  public Review() {
  }

  public Job getJob() {
    return job;
  }

  public void setJob(Job job) {
    this.job = job;
  }

  public Profile getProfile() {
    return profile;
  }

  public void setProfile(Profile profile) {
    this.profile = profile;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public String getUsername() {return this.profile.getUsername();}

  public Integer getJobId() {return this.job.getJobId();}
}
