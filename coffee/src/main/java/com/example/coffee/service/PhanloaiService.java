package com.example.coffee.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.coffee.model.Phanloai;
import com.example.coffee.repository.PhanloaiRepos;

@Service
public class PhanloaiService {
    @Autowired
    private PhanloaiRepos phanloaiRepos;
     public List<Phanloai> findAll(){
        return phanloaiRepos.findAll();
    }
    public Optional<Phanloai> findById(Integer Id){
        return phanloaiRepos.findById(Id);
    }
    public Phanloai save(Phanloai product){
        return phanloaiRepos.save(product);
    }
    public void deleteById(Integer Id){
        phanloaiRepos.deleteById(Id);
    }
}
