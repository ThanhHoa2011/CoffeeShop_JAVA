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

import com.example.coffee.model.KhachHang;
import com.example.coffee.service.KhachHangService;

@RestController
@RequestMapping("/khachhang")
@CrossOrigin(origins={"http://localhost:4200","http://localhost:3000"})
public class KhachHangController {
    @Autowired
    private KhachHangService khachhangService;

    @GetMapping("/getAllCoffee")
    public List<KhachHang> getAllCoffee(){
        return khachhangService.findAll();
    }
    @GetMapping("/getById/{ma_kh}")
    public ResponseEntity<KhachHang> getById(@PathVariable Integer ma_kh){
        Optional<KhachHang> product = khachhangService.findById(ma_kh);
        return product.map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());
    }
    @PostMapping("/create")
    public KhachHang createRole(@RequestBody KhachHang product){
        return khachhangService.save(product);
    }
    @PutMapping("/update/{ma_kh}")
    public ResponseEntity<KhachHang> updateRole(@PathVariable Integer ma_kh, @RequestBody KhachHang khachhang){
        if(khachhangService.findById(ma_kh).isPresent()){
            khachhang.setma_kh(ma_kh);
            return ResponseEntity.ok(khachhangService.save(khachhang));
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/delete/{ma_kh}")
    public ResponseEntity<KhachHang> deleteRole(@PathVariable Integer ma_kh){
        if(khachhangService.findById(ma_kh).isPresent()){
            khachhangService.deleteById(ma_kh);
            return ResponseEntity.noContent().build();
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
}
