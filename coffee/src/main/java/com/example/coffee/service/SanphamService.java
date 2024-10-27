package com.example.coffee.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.coffee.model.Sanpham;
import com.example.coffee.repository.SanphamRepos;

@Service
public class SanphamService {
    @Autowired 
    private SanphamRepos sanphamRepos;

    public List<Sanpham> findAll(){
        return sanphamRepos.findAll();
    }
    public Optional<Sanpham> findById(Integer Id){
        return sanphamRepos.findById(Id);
    }
    public Sanpham save(Sanpham product){
        return sanphamRepos.save(product);
    }
    public void deleteById(Integer Id){
        sanphamRepos.deleteById(Id);
    }
}