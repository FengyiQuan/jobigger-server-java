package com.example.jobiggerserverjava.models;

import java.time.LocalDate;
import java.util.List;
import javax.persistence.*;

@Entity
@Table(name="profiles")
public class Profile {
  private enum Role {VISITOR, EMPLOYEE, JOB_SEEKER, ADMIN}

  @Id
  private String username;
  private String password;
  private Role role;
  private String email;
  private LocalDate dob;

  public List<Review> getReviews() {
    return reviews;
  }

  public void setReviews(List<Review> reviews) {
    this.reviews = reviews;
  }

  @OneToMany(mappedBy="profile")
  private List<Review> reviews;

  public Profile() {
  }

  public Profile(String username, String password, Role role, String email, LocalDate dob) {
    this.username = username;
    this.password = password;
    this.role = role;
    this.email = email;
    this.dob = dob;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public LocalDate getDob() {
    return dob;
  }

  public void setDob(LocalDate dob) {
    this.dob = dob;
  }
}
