package com.example.coffee.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.coffee.model.Sanpham;
import com.example.coffee.service.SanphamService;

@RestController
@RequestMapping("/sanpham") 
@CrossOrigin(origins={"http://localhost:4200","http://localhost:3000"})
public class SanphamController {
    @Autowired
    private SanphamService sanphamService;

    @GetMapping("/getAllCoffee")
    public List<Sanpham> getAllCoffee(){
        return sanphamService.findAll();
    }
    @GetMapping("/getById/{ma_sp}")
    public ResponseEntity<Sanpham> getById(@PathVariable Integer ma_sp){
        Optional<Sanpham> product = sanphamService.findById(ma_sp);
        return product.map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());
    }
    @PostMapping("/create")
    public Sanpham createRole(@RequestBody Sanpham product){
        return sanphamService.save(product);
    }
    @PutMapping("/update/{ma_sp}")
    public ResponseEntity<Sanpham> updateRole(@PathVariable Integer ma_sp, @RequestBody Sanpham sanpham){
        if(sanphamService.findById(ma_sp).isPresent()){
            sanpham.setma_sp(ma_sp);
            return ResponseEntity.ok(sanphamService.save(sanpham));
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/delete/{ma_sp}")
    public ResponseEntity<Sanpham> deleteRole(@PathVariable Integer ma_sp){
        if(sanphamService.findById(ma_sp).isPresent()){
            sanphamService.deleteById(ma_sp);
            return ResponseEntity.noContent().build();
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
}
