package com.example.jobiggerserverjava.models;

import java.time.LocalDate;

public class Company {
  private int cid;
  private String name;
  private LocalDate since;

  public Company() {
  }

  public Company(int cid, String name, LocalDate since) {
    this.cid = cid;
    this.name = name;
    this.since = since;
  }

  public int getCid() {
    return cid;
  }

  public void setCid(int cid) {
    this.cid = cid;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public LocalDate getSince() {
    return since;
  }

  public void setSince(LocalDate since) {
    this.since = since;
  }
}
