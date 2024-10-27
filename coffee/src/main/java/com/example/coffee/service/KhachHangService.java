package com.example.coffee.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.coffee.model.KhachHang;
import com.example.coffee.repository.KhachHangRepos;

@Service
public class KhachHangService {
    @Autowired
    private KhachHangRepos khachhangRepos;
     public List<KhachHang> findAll(){
        return khachhangRepos.findAll();
    }
    public Optional<KhachHang> findById(Integer Id){
        return khachhangRepos.findById(Id);
    }
    public KhachHang save(KhachHang product){
        return khachhangRepos.save(product);
    }
    public void deleteById(Integer Id){
        khachhangRepos.deleteById(Id);
    }

}
