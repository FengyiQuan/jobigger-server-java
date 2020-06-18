package com.example.jobiggerserverjava.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Job {

  @Id
  private int jobId;
  private String jobName;

  @OneToMany(mappedBy="job")
  private List<Review> reviews;


  @ManyToMany
  @JsonIgnore
  private List<Profile> users;

  public List<Profile> getUsers() {
    return users;
  }

  public void setUsers(List<Profile> users) {
    this.users = users;
  }

  public List<Review> getReviews() {
    return reviews;
  }

  public void setReviews(List<Review> reviews) {
    this.reviews = reviews;
  }

  public Job(){}

  public Job(int jobId, String jobName) {
    this.jobId = jobId;
    this.jobName = jobName;
  }



  public int getJobId() {
    return jobId;
  }

  public void setJobId(int jobId) {
    this.jobId = jobId;
  }

  public String getJobName() {
    return jobName;
  }

  public void setJobName(String jobName) {
    this.jobName = jobName;
  }

}
