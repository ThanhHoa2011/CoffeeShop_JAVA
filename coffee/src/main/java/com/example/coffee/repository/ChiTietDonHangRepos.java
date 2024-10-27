package com.example.coffee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.coffee.model.ChiTietDonHang;

@Repository
public interface ChiTietDonHangRepos extends JpaRepository<ChiTietDonHang, Integer>{

}
