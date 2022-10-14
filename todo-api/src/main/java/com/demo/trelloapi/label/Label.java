package com.demo.trelloapi.label;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Table(name = "label")
public class Label {
  public Label() { }

  public Label(String name, String description) {
    this.name = name;
    this.description = description;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false)
  private Integer id;

  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "description", nullable = false)
  private String description;

  @ColumnDefault("true")
  @Column(name = "status", nullable = false)
  private Boolean status = true;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Boolean getStatus() {
    return status;
  }

  public void setStatus(Boolean status) {
    this.status = status;
  }

  @Override
  public String toString() {
    return "Label [id=" + id + ", name=" + name + ", desc=" + description + ", status=" + status + "]";
  }
}
