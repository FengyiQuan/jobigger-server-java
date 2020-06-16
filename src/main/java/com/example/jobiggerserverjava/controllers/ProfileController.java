package com.example.jobiggerserverjava.controllers;

import com.example.jobiggerserverjava.models.Profile;
import com.example.jobiggerserverjava.services.ProfileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class ProfileController {
  @Autowired
  private ProfileService profileService;

  @PutMapping("/api/profiles/{username}")
  public int updateProfile(
          @PathVariable("username") String username,
          @RequestBody Profile updatedProfile) {
    return profileService.updateProfile(username, updatedProfile);
  }

//  @PostMapping("/api/widgets")
//  public Widget createStandaloneWidget(
//          @RequestBody Widget newWidget) {
//    return widgetService.createWidget(newWidget);
//  }

  @PostMapping("/api/profiles/")
  public Profile createProfile(
          @RequestBody Profile newProfile) {
    return profileService.createProfile(newProfile);
  }

  @GetMapping("/api/profiles")
  public List<Profile> findAllProfile() {
    return profileService.findAllProfile();
  }

  @GetMapping("/api/profiles/{username}")
  public Profile findWidgetById(
          @PathVariable("username") String username) {
    return profileService.findProfileByUsername(username);
  }

  @DeleteMapping("/api/profiles/{username}")
  public Integer deleteProfile(
          @PathVariable("username") String username) {
    return profileService.deleteProfile(username);
  }

}
