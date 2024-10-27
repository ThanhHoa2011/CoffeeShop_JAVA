package com.example.coffee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.coffee.model.DonHang;

@Repository
public interface DonHangRepos extends JpaRepository<DonHang, Integer>{

}
