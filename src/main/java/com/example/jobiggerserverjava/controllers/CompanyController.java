package com.example.jobiggerserverjava.controllers;

import com.example.jobiggerserverjava.models.Company;
import com.example.jobiggerserverjava.services.CompanyService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class CompanyController {
  @Autowired
  private CompanyService companyService;

  @GetMapping("/api/companies/{cid}")
  public Company findReviewById(@PathVariable("cid") Integer cid) {
    return companyService.findCompanyById(cid);
  }

  @DeleteMapping("/api/companies/{cid}")
  public Integer deleteReview(
          @PathVariable("cid") Integer cid) {
    return companyService.deleteCompany(cid);
  }

  @PostMapping("/api/companies/")
  public Company createCompany(
          @RequestBody Company newCompany) {
    return companyService.createCompany(newCompany);
  }

  @PutMapping("/api/companies/{cid}")
  public int updateProfile(
          @PathVariable("cid") Integer cid,
          @RequestBody Company updatedCompany) {
    return companyService.updateCompany(cid, updatedCompany);
  }
}
