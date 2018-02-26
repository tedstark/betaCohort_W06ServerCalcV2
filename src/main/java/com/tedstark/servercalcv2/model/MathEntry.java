package com.tedstark.servercalcv2.model;

public class MathEntry {
    private String num1;
    private String num2;
    private String opr;
    private String solution;

    public MathEntry(String num1, String opr, String num2) {
        this.num1=num1;
        this.num2=num2;
        this.opr=opr;

        double val1=Double.parseDouble(num1);
        double val2=Double.parseDouble(num2);

        switch(opr) {
            case "add":
                this.opr="+";
                this.solution=String.valueOf(val1+val2);
                break;
            case "sub":
                this.opr="-";
                this.solution=String.valueOf(val1-val2);
                break;
            case "mult":
                this.opr="*";
                this.solution=String.valueOf(val1*val2);
                break;
            case "div":
                this.opr="/";
                this.solution=String.valueOf(val1/val2);
                break;

        }
    }

    public String getNum1() {
        return num1;
    }

    public void setNum1(String num1) {
        this.num1 = num1;
    }

    public String getNum2() {
        return num2;
    }

    public void setNum2(String num2) {
        this.num2 = num2;
    }

    public String getOpr() {
        return opr;
    }

    public void setOpr(String opr) {
        this.opr = opr;
    }

    public String getSolution() {
        return solution;
    }

    public void setSolution(String solution) {
        this.solution = solution;
    }
}
