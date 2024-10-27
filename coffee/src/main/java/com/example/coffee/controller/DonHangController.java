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

import com.example.coffee.model.DonHang;
import com.example.coffee.service.DonHangService;

@RestController
@RequestMapping("/donhang")
@CrossOrigin(origins={"http://localhost:4200","http://localhost:3000"})
public class DonHangController {
    @Autowired
    private DonHangService donhangService;

     @GetMapping("/getAllCoffee")
    public List<DonHang> getAllCoffee(){
        return donhangService.findAll();
    }
    @GetMapping("/getById/{ma_dh}")
    public ResponseEntity<DonHang> getById(@PathVariable Integer ma_dh){
        Optional<DonHang> product = donhangService.findById(ma_dh);
        return product.map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());
    }
    @PostMapping("/create")
    public DonHang createRole(@RequestBody DonHang product){
        return donhangService.save(product);
    }
    @PutMapping("/update/{ma_dh}")
    public ResponseEntity<DonHang> updateRole(@PathVariable Integer ma_dh, @RequestBody DonHang donhang){
        if(donhangService.findById(ma_dh).isPresent()){
            donhang.setma_dh(ma_dh);
            return ResponseEntity.ok(donhangService.save(donhang));
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/delete/{ma_dh}")
    public ResponseEntity<DonHang> deleteRole(@PathVariable Integer ma_dh){
        if(donhangService.findById(ma_dh).isPresent()){
            donhangService.deleteById(ma_dh);
            return ResponseEntity.noContent().build();
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

}
