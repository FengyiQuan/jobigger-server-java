package com.example.jobiggerserverjava.repositories;

import com.example.jobiggerserverjava.models.Job;
import com.example.jobiggerserverjava.models.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface JobRepository extends CrudRepository<Job, Integer> {

  @Query("SELECT job FROM Job job WHERE job.jobId=:jid")
  Job findJobById(@Param("jid") Integer jid);

}
