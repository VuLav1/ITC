package Dientich;

import java.util.Scanner;

public class Rectangle extends Shape {
        float d;
        float r; @Override
        public void inputData(){
            System.out.println("Nhap chieu dai canh ngan hinh chu nhat");
            System.out.println("Nhap chieu dai canh dai hinh chu nhat");
            Scanner nhap1 = new Scanner(System.in);
            d = nhap1.nextFloat();
            Scanner nhap2 = new Scanner(System.in);
            r = nhap2.nextFloat();
        }
        @Override
        public void calArea() {
            float area = (float)(d*r);
            System.out.printf("Dien tich hinh chu nhat la: %2f", area);
        }
    }
