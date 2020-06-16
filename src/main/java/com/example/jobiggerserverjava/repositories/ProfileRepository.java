package com.example.jobiggerserverjava.repositories;
import com.example.jobiggerserverjava.models.Profile;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface ProfileRepository extends CrudRepository<Profile, String> {
  @Query("SELECT profile FROM Profile profile WHERE profile.username=:username")
  public Profile findUserById(@Param("username") String username);


  @Query("SELECT profile FROM Profile profile WHERE profile.username=:username AND profile.password=:password")
  Profile findUserByCredentials(
      @Param("username") String username,
      @Param("password") String password);

}
