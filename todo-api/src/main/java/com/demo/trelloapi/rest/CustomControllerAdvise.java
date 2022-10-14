package com.demo.trelloapi.rest;

import com.demo.trelloapi.exceptionhandler.CustomDataNotFoundException;
import com.demo.trelloapi.exceptionhandler.CustomErrorException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.io.PrintWriter;
import java.io.StringWriter;

@ControllerAdvice
public class CustomControllerAdvise {
  @ExceptionHandler(CustomDataNotFoundException.class)
  public ResponseEntity<?> handleCustomDataNotFoundExceptions(
    Exception e
  ) {
    HttpStatus status = HttpStatus.NOT_FOUND; // 404

    // converting the stack trace to String
    StringWriter stringWriter = new StringWriter();
    PrintWriter printWriter = new PrintWriter(stringWriter);
    e.printStackTrace(printWriter);
    String stackTrace = stringWriter.toString();

    return new ResponseEntity<>(
      new ErrorResponse(
        status,
        e.getMessage(),
        stackTrace
      ),
      status
    );
  }

  @ExceptionHandler(CustomErrorException.class)
  public ResponseEntity<ErrorResponse> handleCustomErrorExceptions(
    Exception e
  ) {
    // casting the generic Exception e to CustomErrorException
    CustomErrorException customErrorException = (CustomErrorException) e;

    HttpStatus status = customErrorException.getStatus();

    // converting the stack trace to String
    StringWriter stringWriter = new StringWriter();
    PrintWriter printWriter = new PrintWriter(stringWriter);
    customErrorException.printStackTrace(printWriter);
    String stackTrace = stringWriter.toString();

    return new ResponseEntity<>(
      new ErrorResponse(
        status,
        customErrorException.getMessage(),
        stackTrace,
        customErrorException.getData()
      ),
      status
    );
  }
}
