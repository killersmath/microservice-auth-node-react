package com.demo.trelloapi.exceptionhandler;
public class CustomDataNotFoundException extends RuntimeException {
  public CustomDataNotFoundException() {
    super();
  }

  public CustomDataNotFoundException(String message) {
    super(message);
  }
}
