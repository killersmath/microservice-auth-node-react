package com.demo.trelloapi.label;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/label")
public class LabelRest {

    private LabelService labelService;

    LabelRest(LabelService labelService) {
      this.labelService = labelService;
    }

    @GetMapping(path="/getLabels", produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getLabels() {
      var labelList = labelService.getAllLabel();
      return ResponseEntity.ok().body(
        Map.of(
          "status", true,
          "data", labelList
        )
      );
    }

    @PostMapping(path="/createLabel", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createLabel(@RequestBody ILabel labelDTO) throws Exception {
        var label = labelService.insertLabel(labelDTO);
        return ResponseEntity.ok().body(
          Map.of(
            "status", true,
            "data", label
          )
        );
    }

  @PostMapping(path="/removeLabel", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<?> removeLabel(@RequestBody ILabel labelDTO) throws Exception {
    var result = labelService.removeLabel(labelDTO);
    return ResponseEntity.ok().body(
      Map.of(
        "status", true,
        "data", result
      )
    );
  }
}
