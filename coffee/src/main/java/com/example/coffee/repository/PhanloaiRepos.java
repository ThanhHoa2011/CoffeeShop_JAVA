package com.example.coffee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.coffee.model.Phanloai;

@Repository
public interface PhanloaiRepos extends JpaRepository<Phanloai, Integer> {

}
