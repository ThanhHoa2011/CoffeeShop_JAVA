package com.example.coffee.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.coffee.model.ChiTietDonHang;
import com.example.coffee.repository.ChiTietDonHangRepos;

@Service
public class ChiTietDonHangService {
    @Autowired
    private ChiTietDonHangRepos ctdhRepos;
     public List<ChiTietDonHang> findAll(){
        return ctdhRepos.findAll();
    }
    public Optional<ChiTietDonHang> findById(Integer Id){
        return ctdhRepos.findById(Id);
    }
    public ChiTietDonHang save(ChiTietDonHang product){
        return ctdhRepos.save(product);
    }
    public void deleteById(Integer Id){
        ctdhRepos.deleteById(Id);
    }

}
