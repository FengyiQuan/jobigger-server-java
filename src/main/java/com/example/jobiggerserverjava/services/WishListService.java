package com.example.jobiggerserverjava.services;

import com.example.jobiggerserverjava.models.WishList;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class WishListService {
  private List<WishList> wishLists = new ArrayList<>();

  public WishList findWishListByUsername(String username) {
    for (WishList wishList : wishLists) {
      if (wishList.getUsername().equals(username)) {
        return wishList;
      }
    }
    return null;
  }

  public int deleteWishList(String username) {
    for (WishList wishList : wishLists) {
      if (wishList.getUsername().equals(username)) {
        wishLists.remove(wishList);
        return 1;
      }
    }
    return 0;
  }


  public WishList createWishList(WishList newWishList) {
    this.wishLists.add(newWishList);
    return newWishList;
  }

  public int updateWishList(String username, WishList updatedWishList) {
    for (WishList w : this.wishLists) {
      if (w.getUsername().equals(username)) {
        updatedWishList.setUsername(username);
        this.wishLists.set(this.wishLists.indexOf(w), updatedWishList);
        return 1;
      }
    }
    return 0;
  }

  public int addJobIdToWishList(String username, int jid) {
    for (WishList w : this.wishLists) {
      if (w.getUsername().equals(username)) {
        w.getJobIds().add(jid);
        return 1;
      }
    }
    return 0;
  }
}
