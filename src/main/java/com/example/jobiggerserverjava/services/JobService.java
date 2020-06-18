package com.example.jobiggerserverjava.services;

import com.example.jobiggerserverjava.models.Job;
import com.example.jobiggerserverjava.models.Review;
import com.example.jobiggerserverjava.repositories.JobRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {
  @Autowired
  JobRepository repository;
  public Job createJob(Job newJob) {
    return repository.save(newJob);
  }
  public Job findJobById(Integer jobId) {
    return repository.findJobById(jobId);
  }
}
