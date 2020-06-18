package com.example.jobiggerserverjava.repositories;

import com.example.jobiggerserverjava.models.Profile;
import com.example.jobiggerserverjava.models.Review;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ReviewRepository extends CrudRepository<Review, Integer> {

  @Query("SELECT review FROM Review review WHERE review.job.jobId=:jobId")
  List<Review> findReviewByJobId(@Param("jobId") Integer jobId);

  @Query("SELECT review FROM Review review WHERE review.job.jobId=:jobId AND review.profile.username=:username")
  Review findReviewByJobIdAndUsername(@Param("jobId") Integer jobId,
      @Param("username") String username);

  @Query("SELECT review FROM Review review WHERE review.profile.username=:username")
  List<Review> findReviewByUsername(@Param("username") String username);

//  @Query("SELECT profile FROM Profile profile WHERE profile.username=:username AND profile.password=:password")
//  Profile findUserByCredentials(
//      @Param("username") String username,
//      @Param("password") String password);
}
