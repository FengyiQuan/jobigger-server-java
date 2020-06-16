package com.example.jobiggerserverjava.repositories;
import com.example.jobiggerserverjava.models.Profile;

import org.springframework.data.repository.CrudRepository;


public interface UserRepository extends CrudRepository<Profile, String> {


}
