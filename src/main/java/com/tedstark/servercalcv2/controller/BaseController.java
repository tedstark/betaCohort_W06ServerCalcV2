package com.tedstark.servercalcv2.controller;

import com.tedstark.servercalcv2.data.MathRepository;
import com.tedstark.servercalcv2.model.MathEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BaseController {

    @Autowired
    private MathRepository mathRepository;

    @RequestMapping("/")
    public String indexRoute(){
        return "index";
    }
    //url: "/math/" + num1 + "/" + op + "/" + num2;
    @RequestMapping("/math/{num1}/{op}/{num2}")
    public String doMath(
            @PathVariable String num1,
            @PathVariable String op,
            @PathVariable String num2,
            ModelMap modelMap
    ){
        MathEntry newCalc = new MathEntry(num1, op, num2);
        mathRepository.addEntry(newCalc);
        modelMap.put("result", newCalc);
        return "last";
    }
    @RequestMapping("/log")
    public String getHistory(ModelMap modelMap) {
        modelMap.put("calcHistory", mathRepository.getAllEntries());
        return "log";
    }
}
