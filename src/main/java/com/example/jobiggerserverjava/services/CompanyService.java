package com.example.jobiggerserverjava.services;

import com.example.jobiggerserverjava.models.Company;
import com.example.jobiggerserverjava.models.Profile;

import java.util.ArrayList;
import java.util.List;

public class CompanyService {
  private List<Company> companies = new ArrayList<>();

  public Company findCompanyById(int cid) {
    for (Company c : companies) {
      if (c.getCid() == cid) {
        return c;
      }
    }
    return null;
  }

  public int deleteCompany(int cid) {
    for (Company c : companies) {
      if (c.getCid() == cid) {
        companies.remove(c);
        return 1;
      }
    }
    return 0;
  }


  public Company createCompany(Company newCompany) {
    this.companies.add(newCompany);
    return newCompany;
  }

  public int updateCompany(int cid, Company updatedCompany) {

    for (Company c : this.companies) {
      if (c.getCid() == cid) {
        updatedCompany.setCid(cid);
        this.companies.set(this.companies.indexOf(c), updatedCompany);
        return 1;
      }
    }
    return 0;
  }
}
