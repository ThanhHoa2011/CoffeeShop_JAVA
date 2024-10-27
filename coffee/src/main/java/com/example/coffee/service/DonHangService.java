package com.example.coffee.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.coffee.model.DonHang;
import com.example.coffee.repository.DonHangRepos;

@Service
public class DonHangService {
    @Autowired
    private DonHangRepos donhangRepos;
         public List<DonHang> findAll(){
        return donhangRepos.findAll();
    }
    public Optional<DonHang> findById(Integer Id){
        return donhangRepos.findById(Id);
    }
    public DonHang save(DonHang product){
        return donhangRepos.save(product);
    }
    public void deleteById(Integer Id){
        donhangRepos.deleteById(Id);
    }
}
