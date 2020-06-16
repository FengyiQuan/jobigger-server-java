package com.example.jobiggerserverjava.controllers;

import com.example.jobiggerserverjava.models.WishList;
import com.example.jobiggerserverjava.services.WishListService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


public class WishListController {

  @Autowired
  WishListService wishListService;

  @PutMapping("/api/profiles/{username}/wishLists")
  public int updateWishList(
          @PathVariable("username") String username,
          @RequestBody WishList updatedWishList) {
    return wishListService.updateWishList(username, updatedWishList);
  }

  @PutMapping("/api/profiles/{username}/wishLists")
  public int addJobIdToWishList(
          @PathVariable("username") String username,
          @RequestBody int jid) {
    return wishListService.addJobIdToWishList(username, jid);
  }

  @PostMapping("/api/wishLists/")
  public WishList createWishList(
          @RequestBody WishList newWishList) {
    return wishListService.createWishList(newWishList);
  }

  @GetMapping("/api/profiles/{username}/wishList")
  public WishList findWishListByUsername(@PathVariable("username") String username) {
    return wishListService.findWishListByUsername(username);
  }


  @DeleteMapping("/api/profiles/{username}/wishList")
  public Integer deleteWishList(
          @PathVariable("username") String username) {
    return wishListService.deleteWishList(username);
  }


}
