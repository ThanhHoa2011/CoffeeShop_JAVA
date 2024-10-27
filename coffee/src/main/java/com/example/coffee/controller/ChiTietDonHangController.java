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

import com.example.coffee.model.ChiTietDonHang;
import com.example.coffee.service.ChiTietDonHangService;

@RestController
@RequestMapping("/ctdh")
@CrossOrigin(origins={"http://localhost:4200","http://localhost:3000"})
public class ChiTietDonHangController {
    @Autowired
    private ChiTietDonHangService ctdhService;
    
     @GetMapping("/getAllCoffee")
    public List<ChiTietDonHang> getAllCoffee(){
        return ctdhService.findAll();
    }
    @GetMapping("/getById/{ma_ctdh}")
    public ResponseEntity<ChiTietDonHang> getById(@PathVariable Integer ma_ctdh){
        Optional<ChiTietDonHang> product = ctdhService.findById(ma_ctdh);
        return product.map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());
    }
    @PostMapping("/create")
    public ChiTietDonHang createRole(@RequestBody ChiTietDonHang product){
        return ctdhService.save(product);
    }
    @PutMapping("/update/{ma_ctdh}")
    public ResponseEntity<ChiTietDonHang> updateRole(@PathVariable Integer ma_ctdh, @RequestBody ChiTietDonHang ctdh){
        if(ctdhService.findById(ma_ctdh).isPresent()){
            ctdh.setma_ctdh(ma_ctdh);
            return ResponseEntity.ok(ctdhService.save(ctdh));
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/delete/{ma_ctdh}")
    public ResponseEntity<ChiTietDonHang> deleteRole(@PathVariable Integer ma_ctdh){
        if(ctdhService.findById(ma_ctdh).isPresent()){
            ctdhService.deleteById(ma_ctdh);
            return ResponseEntity.noContent().build();
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

}
