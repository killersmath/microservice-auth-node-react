package com.demo.trelloapi.label;

import com.demo.trelloapi.exceptionhandler.CustomErrorException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LabelService {

  private LabelRepository labelRepository;

  LabelService(LabelRepository labelRepository) {
    this.labelRepository = labelRepository;
  }

  public List<Label> getAllLabel() {
    return this.labelRepository.findAll();
  }

  public Optional<Label> getLabelById (Integer id) {
    return this.labelRepository.findById(id);
  }

  public Optional<Label> getLabelByName (String name) {
    return this.labelRepository.findByName(name);
  }

  public Label insertLabel(ILabel labelDTO) throws Exception {
    var labelFromBase = this.labelRepository.findByName(labelDTO.name);

    if (labelFromBase.isPresent()) {
      throw new CustomErrorException(
        HttpStatus.BAD_REQUEST,
        "Name is duplicated",
        labelDTO.name
      );
    }

    Label labelPojo = new Label(labelDTO.name, labelDTO.description);
    return this.labelRepository.save(labelPojo);
  }

  public Boolean removeLabel(ILabel labelDTO) throws Exception {
    var labelFromBase = this.labelRepository.findById(labelDTO.id);

    if (!labelFromBase.isPresent()) {
      throw new CustomErrorException(
        HttpStatus.NOT_FOUND,
        "Label with provided is has not been found!",
        labelDTO.id
      );
    }

    this.labelRepository.delete(labelFromBase.get());

    return true;
  }

}
