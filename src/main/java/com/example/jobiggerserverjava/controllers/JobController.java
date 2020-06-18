package com.example.jobiggerserverjava.controllers;

import com.example.jobiggerserverjava.models.Job;
import com.example.jobiggerserverjava.models.Review;
import com.example.jobiggerserverjava.services.JobService;
import com.example.jobiggerserverjava.services.ReviewService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class JobController {
  @Autowired
  private JobService jobService;

  @PostMapping("/api/jobs")
  public Job createJob(
          @RequestBody Job newJob) {
    return jobService.createJob(newJob);
  }

  @GetMapping("/api/jobs/{jid}")
  public Job findJobById(@PathVariable("jid") Integer jid) {
    return jobService.findJobById(jid);
  }
}
