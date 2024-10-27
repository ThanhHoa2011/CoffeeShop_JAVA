package com.example.coffee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.coffee.model.Sanpham;

@Repository
public interface SanphamRepos extends JpaRepository<Sanpham,Integer>{
}
