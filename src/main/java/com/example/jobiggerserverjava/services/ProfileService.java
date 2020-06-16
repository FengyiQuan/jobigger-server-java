package com.example.jobiggerserverjava.services;

import com.example.jobiggerserverjava.models.Profile;

import com.example.jobiggerserverjava.repositories.ProfileRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {
  private List<Profile> profileInfo = new ArrayList<>();

  @Autowired
  ProfileRepository repository;

  public Profile createProfile(Profile newProfile) {
    return repository.save(newProfile);
  }

  public Profile findProfileByUsername(String username) {
    return repository.findUserById(username);
  }


  public Profile findProfileByCredentials(String username, String password) {
    return repository.findUserByCredentials(username, password);
  }


//  public Profile findProfileByUsername(String username) {
//    for (Profile p : profileInfo) {
//      if (p.getUsername().equals(username)) {
//        return p;
//      }
//    }
//    return null;
//  }

  public List<Profile> findAllProfile() {
    return profileInfo;
  }

  public int deleteProfile(String username) {
    for (Profile p : profileInfo) {
      if (p.getUsername().equals(username)) {
        profileInfo.remove(p);
        return 1;
      }
    }
    return 0;
  }


//  public Profile createProfile(Profile newProfile) {
//
//    this.profileInfo.add(newProfile);
//    return newProfile;
//  }

  public int updateProfile(String username, Profile updatedProfile) {

    for (Profile p : this.profileInfo) {
      if (p.getUsername().equals(username)) {
        updatedProfile.setUsername(username);
        this.profileInfo.set(this.profileInfo.indexOf(p), updatedProfile);
        return 1;
      }
    }
    return 0;
  }
}
