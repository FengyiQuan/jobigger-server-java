package com.example.jobiggerserverjava.services;

import com.example.jobiggerserverjava.models.Job;
import com.example.jobiggerserverjava.models.Profile;
import com.example.jobiggerserverjava.repositories.JobRepository;
import com.example.jobiggerserverjava.repositories.ProfileRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WishListService {
  @Autowired
  JobRepository jobRepository;

  @Autowired
  ProfileRepository profileRepository;


  public Profile addToWishList(int jid, String username) {
    Job job = jobRepository.findJobById(jid);
    Profile profile = profileRepository.findUserById(username);
    List<Profile> pList = job.getUsers();
    pList.add(profile);
    List<Job> jList = profile.getJobs();
    jList.add(job);
    jobRepository.save(job);
    return profileRepository.save(profile);
  }

  public Profile deleteFromWishList(int jid, String username) {
    Job job = jobRepository.findJobById(jid);
    Profile profile = profileRepository.findUserById(username);
    List<Profile> pList = job.getUsers();
    pList.remove(profile);
    List<Job> jList = profile.getJobs();
    jList.remove(job);
    jobRepository.save(job);
    return profileRepository.save(profile);
  }
}
