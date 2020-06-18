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

  public void deleteProfile(String username) {
    repository.deleteById(username);
  }


//  public Profile createProfile(Profile newProfile) {
//
//    this.profileInfo.add(newProfile);
//    return newProfile;
//  }

  public Profile updateProfile(String username, Profile updatedProfile) {
    if (repository.findUserById(username) != null) {
      return repository.save(updatedProfile);
    } else {
      return null;
    }
  }
}
