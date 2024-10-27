package com.example.coffee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.coffee.model.KhachHang;

@Repository
public interface KhachHangRepos extends JpaRepository<KhachHang, Integer> {

}
