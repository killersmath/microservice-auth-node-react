package com.demo.trelloapi.label;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface  LabelRepository extends JpaRepository<Label, Integer> {
  List<Label> findAll();
  Optional<Label> findById(Integer id);

  Optional<Label> findByName(String name);
}
